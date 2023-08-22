const Driver = require('../models/driver');

// Create a new driver
exports.createDriver = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      zipCode,
      phone,
      alternatePhone,
      fax,
      email,
      defaultPaymentType,
      licenseNumber,
      licenseExpiration,
      licenseIssuingState,
      medicalCardRenewal,
      hireDate,
      terminationDate,
      contactName,
      contactPhone,
      contactStreet,
      contactCity,
      contactState,
      contactZipCode
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newDriver = new Driver({
      firstName,
      lastName,
      street,
      city,
      state,
      zipCode,
      phone,
      alternatePhone,
      fax,
      email,
      defaultPaymentType,
      licenseNumber,
      licenseExpiration,
      licenseIssuingState,
      medicalCardRenewal,
      hireDate,
      terminationDate,
      contactName,
      contactPhone,
      contactStreet,
      contactCity,
      contactState,
      contactZipCode
      // Add other fields as needed
    });

    const savedDriver = await newDriver.save();
    res.status(201).json(savedDriver);
  } catch (error) {
    console.error('Error creating driver:', error);
    res.status(500).json({ error: 'An error occurred while creating a driver' });
  }
};

// Fetch all drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    console.error('Error fetching drivers:', error);
    res.status(500).json({ error: 'An error occurred while fetching drivers' });
  }
};

// Fetch a driver by ID
exports.getDriverById = async (req, res) => {
  try {
    const driverId = req.params.id;
    const driver = await Driver.findById(driverId);
    
    if (!driver) {
      return res.status(404).json({ error: 'Driver not found' });
    }

    res.status(200).json(driver);
  } catch (error) {
    console.error('Error fetching driver:', error);
    res.status(500).json({ error: 'An error occurred while fetching driver' });
  }
};

// Update driver by ID
exports.updateDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    const updatedData = req.body;
    
    const updatedDriver = await Driver.findByIdAndUpdate(driverId, updatedData, { new: true });

    if (!updatedDriver) {
      return res.status(404).json({ error: 'Driver not found' });
    }

    res.status(200).json(updatedDriver);
  } catch (error) {
    console.error('Error updating driver:', error);
    res.status(500).json({ error: 'An error occurred while updating driver' });
  }
};

// Delete driver by ID
exports.deleteDriver = async (req, res) => {
  try {
    const driverId = req.params.id;
    
    const deletedDriver = await Driver.findByIdAndDelete(driverId);

    if (!deletedDriver) {
      return res.status(404).json({ error: 'Driver not found' });
    }

    res.status(200).json({ message: 'Driver deleted successfully' });
  } catch (error) {
    console.error('Error deleting driver:', error);
    res.status(500).json({ error: 'An error occurred while deleting the driver' });
  }
};

