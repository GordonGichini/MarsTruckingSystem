const MilePlan = require('../models/milePlan');

// create a new mile Plan
exports.createMilePlan = async (req, res) => {
    try {
        const {
            title,
            description,
            mileageInterval,
            units,
        } = req.body;
        console.log('Received Data:', req.body);

        const newMilePlan = new MilePlan({
            title,
            description,
            mileageInterval,
            units,
        });

        const savedMilePlan = await newMilePlan.save();
        res.status(201).json(savedMilePlan);
    } catch (error) {
        console.error('Error creating a mile plan:', error);
        res.status(500).json({ error: 'An error occurred while creating a mile plan' });
    }
};

//Fetch all mileplans
exports.getAllMilePlans = async (req, res) => {
    try {
        const milePlans = await MilePlan.find();
        res.status(200).json(milePlans);
    } catch (error) {
        console.error('Error fetching mileplans:', error);
        res.status(500).json({ error: 'An error occurred while fetching milePlans' });
    }
};

//Fetch a single milePlan by ID
exports.getMilePlanById = async (req, res) => {
    try {
      const milePlanId = req.params.id;
      const milePlan = await MilePlan.findById(milePlanId);
      
      if (!milePlan) {
        return res.status(404).json({ error: 'MilePlan not found' });
      }
  
      res.status(200).json(milePlan);
    } catch (error) {
      console.error('Error fetching milePlan:', error);
      res.status(500).json({ error: 'An error occurred while fetching mile plan' });
    }
  };
  
  // Update a milePlan by ID
  exports.updateMilePlan = async (req, res) => {
    try {
      const milePlanId = req.params.id;
      const updatedData = req.body;
      
      const updatedMilePlan = await MilePlan.findByIdAndUpdate(milePlanId, updatedData, { new: true });
  
      if (!updatedMilePlan) {
        return res.status(404).json({ error: 'MilePlan not found' });
      }
  
      res.status(200).json(updatedMilePlan);
    } catch (error) {
      console.error('Error updating milePlan:', error);
      res.status(500).json({ error: 'An error occurred while updating the milePlan' });
    }
  };
  
  // Delete a mile plan  by ID
  exports.deleteMilePlan = async (req, res) => {
    try {
      const milePlanId = req.params.id;
      
      const deletedMilePlan = await MilePlan.findByIdAndDelete(milePlanId);
  
      if (!deletedMilePlan) {
        return res.status(404).json({ error: 'MilePlan not found' });
      }
  
      res.status(200).json({ message: 'MilePlan deleted successfully' });
    } catch (error) {
      console.error('Error deleting mileplan:', error);
      res.status(500).json({ error: 'An error occurred while deleting the mile plan' });
    }
  };
  
  