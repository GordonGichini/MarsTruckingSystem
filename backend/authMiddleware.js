const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found.' });
  }

  try {
    const decodedToken = jwt.verify(token, 'YOUR_SECRET_KEY');
    req.user = decodedToken; // Store the user data in the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(401).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticateUser;
