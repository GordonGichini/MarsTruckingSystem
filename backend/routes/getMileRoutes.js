const express = require('express');
const getMileController = require('../controllers/getMileController');
const router = express.Router();

// Create a get Mile
router.post('/', getMileController.createGetMile);

// Fetch get miles
router.get('/', getMileController.getAllGetMiles);

// Fetch getmiles by ID
router.get('/:id', getMileController.getMilesById);

// Update a get mile by ID
router.put('/:id', getMileController.updateGetMiles);

// Delete a get mile by ID
router.delete('/:id', getMileController.deleteGetMiles);


module.exports = router;