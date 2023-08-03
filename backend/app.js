const express = require('express');
const app = express();
const routes = require('./routes');
const errorMiddleware = require('./errorMiddleware');
const mongoose = require('mongoose');
// Other imports and configurations

// Connect to MongoDB
mongoose.connect('mongodb+srv://gordongichini1:mUDzJ064sNgne1ss@cluster0.xm6xl0n.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Other middlewares and configurations

// Use the routes defined in routes.js for /api endpoints
const protectedRoutes = require('./routes/routes');
app.use('/api', protectedRoutes);
app.use(routes);
app.use(errorMiddleware);

// Other routes and configurations

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
