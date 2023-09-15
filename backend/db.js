const mongoose = require('mongoose');

const DB_URL = process.env.MONGODB_URI; // Replace with your MongoDB URL

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
