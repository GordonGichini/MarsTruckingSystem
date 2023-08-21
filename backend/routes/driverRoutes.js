const express = require('express');
const driverController = require('../controllers/driverController');
const router = express.Router();

// Create a driver
router.post('/create', driverController.createDriver);

// Fetch drivers
router.get('/get', driverController.getAllDrivers);

// Fetch a driver by ID
router.get('/:id', driverController.getDriverById);

// Update a driver by ID
router.put('/:id', driverController.updateDriver);

// Delete a driver by ID
router.delete('/:id', driverController.deleteDriver);


module.exports = router;