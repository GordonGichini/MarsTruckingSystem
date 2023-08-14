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

exports.getAllPlannedLoad = async (req, res) => {
    try {
        const plannedLoads = await PlannedLoad.find();
        res.status(200).json(plannedLoads);
    } catch (error) {
        console.error('Error fetching plannedLoads:', error);
        res.status(500).json({ error: 'An error occurred while fetching plannedLoads' });
    }
};

exports.getPlannedLoadById = asyc (req, res) => {
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

exports.updateExpense = async (req, res) => {
    try {
      const expenseId = req.params.id;
      const updatedData = req.body;
      
      const updatedExpense = await Expense.findByIdAndUpdate(expenseId, updatedData, { new: true });
  
      if (!updatedExpense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
  
      res.status(200).json(updatedExpense);
    } catch (error) {
      console.error('Error updating expense:', error);
      res.status(500).json({ error: 'An error occurred while updating the expense' });
    }
  };
  

  exports.deleteExpense = async (req, res) => {
    try {
      const expenseId = req.params.id;
      
      const deletedExpense = await Expense.findByIdAndDelete(expenseId);
  
      if (!deletedExpense) {
        return res.status(404).json({ error: 'Expense not found' });
      }
  
      res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
      console.error('Error deleting expense:', error);
      res.status(500).json({ error: 'An error occurred while deleting the expense' });
    }
  };
  
  