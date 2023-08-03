const errorMiddleware = (err, req, res, next) => {
    // Default status code for server errors
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
    // Set the status code and error message
    res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  };
  
  module.exports = errorMiddleware;
  