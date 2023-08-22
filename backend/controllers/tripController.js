const Trip = require('../models/trip');

// Create a new trip
exports.createTrip = async (req, res) => {
  try {
    const {
      customTripNumber,
      driverName,
      driverPay,
      driverAdvance,
      truck,
      trailer,
      odometer,
      load,
      routingStop,
      routingStopDate,
      instructions,
      notes,
      fuelExpenses,
      truckExpenses,
      reeferFuelExpenses,
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newTrip = new Trip({
      customTripNumber,
      driverName,
      driverPay,
      driverAdvance,
      truck,
      trailer,
      odometer,
      load,
      routingStop,
      routingStopDate,
      instructions,
      notes,
      fuelExpenses,
      truckExpenses,
      reeferFuelExpenses,
      // Add other fields as needed
    });

    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ error: 'An error occurred while creating the trip' });
  }
};

// Fetch all trips
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (error) {
    console.error('Error fetching trips:', error);
    res.status(500).json({ error: 'An error occurred while fetching trips' });
  }
};

// Fetch a single trip by ID
exports.getTripById = async (req, res) => {
  try {
    const tripId = req.params.id;
    const trip = await Trip.findById(tripId);
    
    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.status(200).json(trip);
  } catch (error) {
    console.error('Error fetching trip:', error);
    res.status(500).json({ error: 'An error occurred while fetching the trip' });
  }
};

// Update a trip by ID
exports.updateTrip = async (req, res) => {
  try {
    const tripId = req.params.id;
    const updatedData = req.body;
    
    const updatedTrip = await Trip.findByIdAndUpdate(tripId, updatedData, { new: true });

    if (!updatedTrip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.status(200).json(updatedTrip);
  } catch (error) {
    console.error('Error updating trip:', error);
    res.status(500).json({ error: 'An error occurred while updating the trip' });
  }
};

// Delete a trip by ID
exports.deleteTrip = async (req, res) => {
  try {
    const tripId = req.params.id;
    
    const deletedTrip = await Trip.findByIdAndDelete(tripId);

    if (!deletedTrip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.status(200).json({ message: 'Trip deleted successfully' });
  } catch (error) {
    console.error('Error deleting trip:', error);
    res.status(500).json({ error: 'An error occurred while deleting the trip' });
  }
};

