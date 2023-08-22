const Load = require('../models/load');

// Controller to get all loads
exports.getAllLoads = async (req, res) => {
  try {
    const loads = await Load.find();
    res.status(200).json(loads);
  } catch (error) {
    console.error('Error getting loads:', error);
    res.status(500).json({ message: 'Failed to get loads' });
  }
};

// Controller to update a load
exports.updateLoad = async (req, res) => {
  try {
    const loadId = req.params.id;
    const updatedLoad = await Load.findByIdAndUpdate(loadId, req.body, { new: true });
    res.status(200).json(updatedLoad);
  } catch (error) {
    console.error('Error updating load:', error);
    res.status(500).json({ message: 'Failed to update load' });
  }
};

// Controller to delete a load
exports.deleteLoad = async (req, res) => {
  try {
    const loadId = req.params.id;
    await Load.findByIdAndDelete(loadId);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting load:', error);
    res.status(500).json({ message: 'Failed to delete load' });
  }
};
