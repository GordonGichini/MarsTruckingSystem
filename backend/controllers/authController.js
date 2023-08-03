const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Endpoint for user registration
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({ email, password: hashedPassword });

    return res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ message: 'Something went wrong.' });
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
    const token = jwt.sign({ userId: user._id, role: user.role }, 'YOUR_SECRET_KEY');
    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ message: 'Something went wrong.' });
  }
});

module.exports = router;
