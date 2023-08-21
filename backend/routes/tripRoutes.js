const express = require('express');
const tripController = require('../controllers/tripController');
const router = express.Router();

// Create a new trip
router.post('/create', tripController.createTrip);

// Fetch all trips
router.get('/get', tripController.getAllTrips);

// Fetch a single trip by ID
router.get('/:id', tripController.getTripById);

// Update a trip by ID
router.put('/:id', tripController.updateTrip);

// Delete a trip by ID
router.delete('/:id', tripController.deleteTrip);


module.exports = router;