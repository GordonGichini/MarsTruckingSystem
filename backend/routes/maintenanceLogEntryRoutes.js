const express = require('express');
const maintenanceLogEntryController = require('../controllers/maintenanceLogEntryController');
const router = express.Router();

// Create a new log entry
router.post('/', maintenanceLogEntryController.createMaintenanceLogEntry);

// Fetch all log entries
router.get('/', maintenanceLogEntryController.getAllMaintenanceLogEntries);

// Fetch a single log entry by ID
router.get('/:id', maintenanceLogEntryController.getMaintenanceLogEntryById);

// Update a log entry by ID
router.put('/:id', maintenanceLogEntryController.updateMaintenanceLogEntry);

// Delete a log entry by ID
router.delete('/:id', maintenanceLogEntryController.deleteMaintenanceLogEntry);


module.exports = router;
