const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/routes');
const errorMiddleware = require('./errorMiddleware');
const mongoose = require('mongoose');
const expenseRoutes = require('./routes/expenseRoutes');
const expenseCategoryRoutes = require('./routes/expenseCategoryRoutes');
// Other imports and configurations

//use bodyParser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
mongoose.connect('mongodb+srv://gordongichini1:mUDzJ064sNgne1ss@cluster0.xm6xl0n.mongodb.net/test', 
{ useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Other middlewares and configurations
app.use(cors({
  origin: 'http://localhost:3000',
}));
// Use the routes defined in routes.js for /api endpoints
const protectedRoutes = require('./routes/routes');
app.use('/api', protectedRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/expenseCategories', expenseCategoryRoutes);

app.use(routes);

app.use(errorMiddleware);

// Other routes and configurations

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
