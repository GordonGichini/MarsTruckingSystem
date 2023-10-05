const express = require('express');
const router = express.Router();
const plannedLoadController = require('../controllers/plannedLoadController');

// Create  a new planned load
router.post('/', plannedLoadController.createPlannedLoad);

// Get all planned loads
router.get('/', plannedLoadController.getAllPlannedLoads);

// Get a specific planned load by ID
router.get('/:id', plannedLoadController.getPlannedLoadById);

// Update a specific planned load by ID
router.put('/:id', plannedLoadController.updatePlannedLoad);

// Delete a specific planned load by ID
router.delete('/:id', plannedLoadController.deletePlannedLoad);

// Convert a planned load to an actual load
router.post('/:id/convert', plannedLoadController.convertToActualLoad);

// Get all planned loads associated with a specific load or trip
router.get('/associated/:parentId', plannedLoadController.getPlannedLoadsByParent);



module.exports = router;
