const GetMile = require('../models/getMiles');

// create a new get mile 
exports.createGetMile = async (req, res) => {
    try {
        const {
            streetFrom,
            cityFrom,
            stateFrom,
            streetTo,
            cityTo,
            stateTo,
        } = req.body;
        console.log('Received Data:', req.body);

        const newGetMile = new GetMile({
            streetFrom,
            cityFrom,
            stateFrom,
            streetTo,
            cityTo,
            stateTo,
        });

        const savedGetMile = await newGetMile.save();
        res.status(201).json(savedGetMile);
    } catch (error) {
        console.error('Error creating a get mile:', error);
        res.status(500).json({ error: 'An error occurred while creating a get mile' });
    }
};

//Fetch all get miles
exports.getAllGetMiles = async (req, res) => {
    try {
        const getMiles = await GetMile.find();
        res.status(200).json(getMiles);
    } catch (error) {
        console.error('Error fetching get miles:', error);
        res.status(500).json({ error: 'An error occurred while fetching get miles' });
    }
};

//Fetch a single getmiles by ID
exports.getMilesById = async (req, res) => {
    try {
      const getMilesId = req.params.id;
      const getMiles = await getMiles.findById(getMilesId);
      
      if (!getMiles) {
        return res.status(404).json({ error: 'get miles not found' });
      }
  
      res.status(200).json(getMiles);
    } catch (error) {
      console.error('Error fetching get miles:', error);
      res.status(500).json({ error: 'An error occurred while fetching get miles' });
    }
  };
  
  // Update a get miles by ID
  exports.updateGetMiles = async (req, res) => {
    try {
      const getMilesId = req.params.id;
      const updatedData = req.body;
      
      const updatedGetMiles = await GetMile.findByIdAndUpdate(getMilesId, updatedData, { new: true });
  
      if (!updatedGetMiles) {
        return res.status(404).json({ error: 'Get miles not found' });
      }
  
      res.status(200).json(updatedGetMiles);
    } catch (error) {
      console.error('Error updating get miles:', error);
      res.status(500).json({ error: 'An error occurred while updating the get miles' });
    }
  };
  
  // Delete a get miles  by ID
  exports.deleteGetMiles = async (req, res) => {
    try {
      const getMileId = req.params.id;
      
      const deletedGetMile = await GetMile.findByIdAndDelete(getMileId);
  
      if (!deletedGetMile) {
        return res.status(404).json({ error: 'Get mile not found' });
      }
  
      res.status(200).json({ message: 'Get miles deleted successfully' });
    } catch (error) {
      console.error('Error deleting get miles:', error);
      res.status(500).json({ error: 'An error occurred while deleting the get miles' });
    }
  };
  
  