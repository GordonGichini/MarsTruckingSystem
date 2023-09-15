const express = require('express');
const loadController = require('../controllers/loadController');
const router = express.Router();

// create a planned load
router.post('/loads/planned', loadController.createLoad);

// create an actual load
router.post('/loads/actual', loadController.createLoad);

// Fetch all loads
router.get('/loads', loadController.getAllLoads);

// Fetch a single expense by ID
router.get('/loads/:id', loadController.getLoadById);

// Update an expense by ID
router.put('/loads/:id', loadController.updateLoad);

// Delete an expense by ID
router.delete('/loads/:id', loadController.deleteLoad);


module.exports = router;
