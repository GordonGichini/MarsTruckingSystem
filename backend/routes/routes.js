const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('./config');
const router = express.Router();
const authenticateToken = require("./authMiddleware");
const authenticateUser = require('../middlewares/authMiddleware');
const User = require('./models/user');


// Register a new user
router.post('/register', async (req, res) => {
    try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.sendStatus(201);
} catch (err) {
    res.sendStatus(500);
    }
});

//Login and generate a JWT token
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
  
    if (!user) {
      return res.sendStatus(401);
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
  
    if (!isPasswordValid) {
      return res.sendStatus(401);
    }
  
    const token = jwt.sign({ id: user._id, username: user.username }, config.jwtSecret);
    res.json({ token });
  }); 

  // Logout
router.post('/logout', (req, res) => {
    // You can implement logout functionality here (e.g., invalidate the JWT token)
    res.sendStatus(200);
  });

// Protected route - only accessible to authenticated users
router.get('/profile', authenticateToken, (req, res) => {
  // Access the authenticated user's data from req.user
  const user = req.user;
  res.json({ username: user.username, email: user.email });
});

// Other protected routes can be defined here

module.exports = router;
