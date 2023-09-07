const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const config = require('../config');
const router = express.Router();
const { authenticateToken, authenticateUser } = require("../authMiddleware");
const User = require('../models/user');

app.use(cors({
  origin: 'http://localhost:3000',
}));

// Protected route - only accessible to authenticated users
router.get('/dashboard', authenticateToken, (req, res) => {
  // Access the authenticated user's data from req.user
  const user = req.user;
  res.json({ username: user.username, email: user.email });
});

// Other protected routes can be defined here

module.exports = router;
