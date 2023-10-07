const express = require('express');
const unitController = require('../controllers/unitController');
const router = express.Router();

// Create a new unit
router.post('/', unitController.createUnit);

// Fetch all units
router.get('/', unitController.getAllUnits);

// Fetch a single unit by ID
router.get('/:id', unitController.getUnitById);

// Update an unit by ID
router.put('/:id', unitController.updateUnit);

// Delete an unit by ID
router.delete('/:id', unitController.deleteUnit);


module.exports = router;
