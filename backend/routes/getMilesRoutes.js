const express = require('express');
const getMileController = require('../controllers/getMileController');
const router = express.Router();

// Create a get Mile
router.post('/create', getMileController.createGetMile);

// Fetch get miles
router.get('/get', getMileController.getAllGetMiles);

// Fetch getmiles by ID
router.get('/:id', getMileController.getGetMileById);

// Update a get mile by ID
router.put('/:id', getMileController.updateGetMile);

// Delete a get mile by ID
router.delete('/:id', getMileController.deleteGetMile);


module.exports = router;