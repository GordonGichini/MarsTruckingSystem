const express = require('express');
const milePlanController = require('../controllers/milePlanController');
const router = express.Router();

// Create a new mile plan
router.post('/', milePlanController.createMilePlan);

// Fetch all mile plans
router.get('/', milePlanController.getAllMilePlans);

// Fetch a single mile plan by ID
router.get('/:id', milePlanController.getMilePlanById);

// Update a mile plan by ID
router.put('/:id', milePlanController.updateMilePlan);

// Delete a mile plan by ID
router.delete('/:id', milePlanController.deleteMilePlan);


module.exports = router;
