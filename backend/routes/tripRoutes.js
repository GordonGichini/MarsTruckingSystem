const express = require('express');
const tripController = require('../controllers/tripController');
const router = express.Router();

// Create a new trip
router.post('/trips/create', tripController.createTrip);

// Fetch all trips
router.get('/trips/get', tripController.getAllTrips);

// Fetch a single trip by ID
router.get('/trips/:id', tripController.getTripById);

// Update a trip by ID
router.put('/trips/:id', tripController.updateTrip);

// Delete a trip by ID
router.delete('/trips/:id', tripController.deleteTrip);


module.exports = router;