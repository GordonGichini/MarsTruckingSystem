// routes/routes.js

const express = require('express');
const router = express.Router();
const authenticateUser = require('../middlewares/authMiddleware');

// Protected route - only accessible to authenticated users
router.get('/profile', authenticateUser, (req, res) => {
  // Access the authenticated user's data from req.user
  const { userId, role } = req.user;
  return res.status(200).json({ userId, role });
});

// Other protected routes can be defined here

module.exports = router;
