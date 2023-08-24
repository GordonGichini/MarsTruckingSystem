const Load = require('../models/load');

// Create a load 
exports.createLoad = async (req, res) => {
    try {
        const {
          loadNo,
          tripNo,
          status,
          pickup,
          delivery,
          driver,
          truck,
          customer,
          from,
          to,
          bol,
          total
        } = req.body;
        console.log('Received Data:', req.body);

        const newLoad = new Load({
          loadNo,
          tripNo,
          status,
          pickup,
          delivery,
          driver,
          truck,
          customer,
          from,
          to,
          bol,
          total
        });

        const savedLoad = await newLoad.save();
        res.status(201).json(savedLoad);
    } catch (error) {
        console.error('Error creating load:', error);
        res.status(500).json({ error: 'Could not create a load' });
    }
};


// Controller to get all loads
exports.getAllLoads = async (req, res) => {
  try {
    const loads = await Load.find();
    res.status(200).json(loads);
  } catch (error) {
    console.error('Error getting loads:', error);
    res.status(500).json({ error: 'Failed to get loads' });
  }
};

// Fetch a single load by ID
exports.getLoadById = async (req, res) => {
  try {
    const loadId = req.params.id;
    const load = await Load.findById(loadId);
    
    if (!load) {
      return res.status(404).json({ error: 'Load not found' });
    }

    res.status(200).json(load);
  } catch (error) {
    console.error('Error fetching load:', error);
    res.status(500).json({ error: 'An error occurred while fetching the load' });
  }
};

// Update a load by ID
exports.updateLoad = async (req, res) => {
  try {
    const loadId = req.params.id;
    const updatedData = req.body;
    
    const updatedLoad = await Load.findByIdAndUpdate(loadId, updatedData, { new: true });

    if (!updatedLoad) {
      return res.status(404).json({ error: 'Load not found' });
    }

    res.status(200).json(updatedLoad);
  } catch (error) {
    console.error('Error updating load:', error);
    res.status(500).json({ error: 'An error occurred while updating the load' });
  }
};

// Delete a load by ID
exports.deleteLoad = async (req, res) => {
  try {
    const loadId = req.params.id;
    
    const deletedLoad = await Load.findByIdAndDelete(loadId);

    if (!deletedLoad) {
      return res.status(404).json({ error: 'Load not found' });
    }

    res.status(200).json({ message: 'Load deleted successfully' });
  } catch (error) {
    console.error('Error deleting load:', error);
    res.status(500).json({ error: 'An error occurred while deleting the load' });
  }
};


