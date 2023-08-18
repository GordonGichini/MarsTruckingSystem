const PlannedLoad = require('../models/plannedLoad');

exports.createPlannedLoad = async (req, res) => {
    try {
        const {
            customLoadNumber,
            customer,
            shipper,
            pickupDate,
            driverInstrucions,
            bol,
            customerRequiredInfo,
            weight,
            quantity,
            notes,
            commodity,
            consignee,
            deliveryDate,
            instructions,
            primaryFee,
            primaryFeeType,
            fscAmount,
            fscAmountType,
            detention,
            lumper,
            stopOff,
            tarpFee,
            invoiceAdvance
        } = req.body;

        const newPlannedLoad = new PlannedLoad({
            customLoadNumber,
            customer,
            shipper,
            pickupDate,
            driverInstrucions,
            bol,
            customerRequiredInfo,
            weight,
            quantity,
            notes,
            commodity,
            consignee,
            deliveryDate,
            instructions,
            primaryFee,
            primaryFeeType,
            fscAmount,
            fscAmountType,
            detention,
            lumper,
            stopOff,
            tarpFee,
            invoiceAdvance

        });

        const savedPlannedLoad = await newPlannedLoad.save();
        res.status(201).json(savedPlannedLoad);
    } catch (error) {
        console.error('Error creating a planned Load:', error);
        res.status(500).json({ error: 'An error occurred while creating planned Load'})
    }
};

exports.getAllPlannedLoads = async (req, res) => {
    try {
        const plannedLoads = await PlannedLoad.find();
        res.status(200).json(plannedLoads);
    } catch (error) {
        console.error('Error fetching plannedLoads:', error);
        res.status(500).json({ error: 'An error occurred while fetching plannedLoads' });
    }
};

exports.getPlannedLoadById = async (req, res) => {
    try {
        const plannedLoadId = req.params.id;
        const plannedLoad = await PlannedLoad.findById(plannedLoadId);

        if (!plannedLoad) {
            return res.status(404).json({ error: 'PlannedLoad not found' });
        }
        res.status(200).json(plannedLoad);
    } catch (error) {
        console.error('Error fetching plannedLoad:', error);
        res.status(500).json({ error: 'An error occured while fetching the plannedLoad' });
    }
};

exports.updatePlannedLoad = async (req, res) => {
    try {
      const plannedLoadId = req.params.id;
      const updatedData = req.body;
      
      const updatedPlannedLoad = await PlannedLoad.findByIdAndUpdate(plannedLoadId, updatedData, { new: true });
  
      if (!updatedPlannedLoad) {
        return res.status(404).json({ error: 'Planned Load not found' });
      }
  
      res.status(200).json(updatedPlannedLoad);
    } catch (error) {
      console.error('Error updating plannedLoad:', error);
      res.status(500).json({ error: 'An error occurred while updating the planned load' });
    }
  };
  

  exports.deletePlannedLoad = async (req, res) => {
    try {
      const plannedLoadId = req.params.id;
      
      const deletedPlannedLoad = await PlannedLoad.findByIdAndDelete(plannedLoadId);
  
      if (!deletedPlannedLoad) {
        return res.status(404).json({ error: 'Planned Load not found' });
      }
  
      res.status(200).json({ message: 'Planned Load deleted successfully' });
    } catch (error) {
      console.error('Error deleting planned Load:', error);
      res.status(500).json({ error: 'An error occurred while deleting the planned load' });
    }
  };
  
  