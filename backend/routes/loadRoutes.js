const express = require('express');
const loadController = require('../controllers/loadController');
const router = express.Router();


// Fetch all loads
router.get('/get', loadController.getAllLoads);

// Fetch a single expense by ID
router.get('/:id', loadController.getLoadById);

// Update an expense by ID
router.put('/:id', loadController.updateLoad);

// Delete an expense by ID
router.delete('/:id', loadController.deleteLoad);


module.exports = router;
