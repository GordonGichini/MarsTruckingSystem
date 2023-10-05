const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const cors = require('cors');
const config = require('./config');
const routes = require('./routes/routes');
const errorMiddleware = require('./errorMiddleware');
const mongoose = require('mongoose');
//const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const expenseCategoryRoutes = require('./routes/expenseCategoryRoutes');
const plannedLoadRoutes = require('./routes/plannedLoadRoutes');
const calendarPlanRoutes = require('./routes/calendarPlanRoutes');
const addressBookRoutes = require('./routes/addressBookRoutes');
const companyProfileRoutes = require('./routes/companyProfileRoutes');
const driverRoutes = require('./routes/driverRoutes');
const getMileRoutes = require('./routes/getMileRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const loadRoutes = require('./routes/loadRoutes');
const maintenanceLogEntryRoutes = require('./routes/maintenanceLogEntryRoutes');
const milePlanRoutes = require('./routes/milePlanRoutes');
const tripRoutes = require('./routes/tripRoutes');
const unitRoutes = require('./routes/unitRoutes');

// imports and configurations
// middlewares and configurations
//use bodyParser middleware to parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
  origin: 'http://localhost:3000',
})
);

const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, 
{ useNewUrlParser: true, useUnifiedTopology: true, })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Use the routes defined in routes.js for /api endpoints
const protectedRoutes = require('./routes/routes');
app.use('/api', protectedRoutes);
//app.use('/api/register', authRoutes);
//app.use('/api/login', authRoutes);
//app.use('/api/logout', authRoutes);
app.use('/api', addressBookRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/expenseCategories', expenseCategoryRoutes);
app.use('/api/plannedLoads', plannedLoadRoutes);
app.use('/api/calendarPlans', calendarPlanRoutes);
app.use('/api/companyProfiles', companyProfileRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/getMiles', getMileRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/maintenanceLogEntries', maintenanceLogEntryRoutes);
app.use('/api/milePlans', milePlanRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/units', unitRoutes);
app.use('/api/loads', loadRoutes);


app.use(routes);

app.use(errorMiddleware);

// Other routes and configurations

// Start the server
const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`Server is running on port ${port}`));
