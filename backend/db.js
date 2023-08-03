const mongoose = require('mongoose');

const DB_URL = 'mongodb+srv://gordongichini1:mUDzJ064sNgne1ss@cluster0.xm6xl0n.mongodb.net/'; // Replace with your MongoDB URL

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
