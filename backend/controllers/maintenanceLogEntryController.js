const MaintenanceLogEntry = require('../models/maintenanceLogEntry');

// Create a new log entry
exports.createMaintenanceLogEntry = async (req, res) => {
  try {
    const {
      unit,
      shortDescription,
      description,
      maintenanceVendor,
      amount,
      repairDate,
      odometer,
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newMaintenanceLogEntry = new MaintenanceLogEntry({
      unit,
      shortDescription,
      description,
      maintenanceVendor,
      amount,
      repairDate,
      odometer,
      // Add other fields as needed
    });

    const savedMaintenanceLogEntry = await newMaintenanceLogEntry.save();
    res.status(201).json(savedMaintenanceLogEntry);
  } catch (error) {
    console.error('Error creating log entry:', error);
    res.status(500).json({ error: 'An error occurred while creating the log entry' });
  }
};

// Fetch all log entries
exports.getAllMaintenanceLogEntries = async (req, res) => {
  try {
    const maintenanceLogEntries = await MaintenanceLogEntry.find();
    res.status(200).json(maintenanceLogEntries);
  } catch (error) {
    console.error('Error fetching log entries:', error);
    res.status(500).json({ error: 'An error occurred while fetching log entries' });
  }
};

// Fetch a single log entry by ID
exports.getMaintenanceLogEntryById = async (req, res) => {
  try {
    const maintenanceLogEntryId = req.params.id;
    const maintenanceLogEntry = await MaintenanceLogEntry.findById(maintenanceLogEntryId);
    
    if (!maintenanceLogEntry) {
      return res.status(404).json({ error: 'Log entry not found' });
    }

    res.status(200).json(maintenanceLogEntry);
  } catch (error) {
    console.error('Error fetching log entry:', error);
    res.status(500).json({ error: 'An error occurred while fetching the log entry' });
  }
};

// Update a log entry by ID
exports.updateMaintenanceLogEntry = async (req, res) => {
  try {
    const maintenanceLogEntryId = req.params.id;
    const updatedData = req.body;
    
    const updatedMaintenanceLogEntry = await MaintenanceLogEntry.findByIdAndUpdate(maintenanceLogEntryId, updatedData, { new: true });

    if (!updatedMaintenanceLogEntry) {
      return res.status(404).json({ error: 'Log entry not found' });
    }

    res.status(200).json(updatedMaintenanceLogEntry);
  } catch (error) {
    console.error('Error updating log entry:', error);
    res.status(500).json({ error: 'An error occurred while updating the log entry' });
  }
};

// Delete a log entry by ID
exports.deleteMaintenanceLogEntry = async (req, res) => {
  try {
    const maintenanceLogEntryId = req.params.id;
    
    const deletedMaintenanceLogEntry = await MaintenanceLogEntry.findByIdAndDelete(maintenanceLogEntryId);

    if (!deletedMaintenanceLogEntry) {
      return res.status(404).json({ error: 'Log entry not found' });
    }

    res.status(200).json({ message: 'Log entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting log entry:', error);
    res.status(500).json({ error: 'An error occurred while deleting the log entry' });
  }
};

