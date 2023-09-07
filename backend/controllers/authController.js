const express = require('express');
const router = express.Router();
const config = require('../config');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../authMiddleware');
const User = require('../models/user');


exports.register = async (req, res) => {
  try {
      const { username, email, password } = req.body;

      // Check if the email is already in use
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.sendStatus(201).json({ message: 'Registration successful' });
  } catch (error) {
      console.error('Error while registering user:', error);
      res.sendStatus(500);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found.' });
    }

    // Check if the password is correct
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate a JWT token and send it in the response
    const token = jwt.sign({ id: user._id, email: user.email }, config.jwtSecret);
    return res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
};

//Logout a user
exports.logout = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    //checking if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    //Update the isLoggedIn status to false
    user.isLoggedIn = false;
    await user.save();

    // Redirect or respond as needed (e.g clear cookies, destroy session)

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error logging out:', error);
    res.status(500).json({ message: 'Interval server error' });
  }
};

module.exports = router;
