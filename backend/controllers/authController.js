const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const config = require('../config');
const jwt = require('jsonwebtoken');
const { authenticateToken } = require('../authMiddleware');
const User = require('../models/user');

// Endpoint for user registration
router.post('/register', async (req, res) => {
  try {
      const { username, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.sendStatus(201);
  } catch (err) {
      console.error('Error while registering user:', err);
      res.sendStatus(500);
  }
});

// Endpoint for user login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Email not found.' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate a JWT token and send it in the response
    const token = jwt.sign({ id: user._id, email: user.email }, config.jwtSecret);
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
});

module.exports = router;
