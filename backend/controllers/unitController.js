const Unit = require('../models/unit');

// Create a new unit
exports.createUnit = async (req, res) => {
  try {
    const {
      number,
      unitType,
      ownershipType,
      status,
      vin,
      make,
      model,
      description,
      year,
      yearPurchased,
      purchasePrice,
      licensePlateNumber,
      licensePlateExpiration,
      inspectionStickerExpiration,
      insuranceExpiration,
      initialLocation,
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newUnit = new Unit({
      number,
      unitType,
      ownershipType,
      status,
      vin,
      make,
      model,
      description,
      year,
      yearPurchased,
      purchasePrice,
      licensePlateNumber,
      licensePlateExpiration,
      inspectionStickerExpiration,
      insuranceExpiration,
      initialLocation,
     
      // Add other fields as needed
    });

    const savedUnit = await newUnit.save();
    res.status(201).json(savedUnit);
  } catch (error) {
    console.error('Error creating unit:', error);
    res.status(500).json({ error: 'An error occurred while creating a unit' });
  }
};

// Fetch all unts
exports.getAllUnits = async (req, res) => {
  try {
    const units = await Unit.find();
    res.status(200).json(units);
  } catch (error) {
    console.error('Error fetching units:', error);
    res.status(500).json({ error: 'An error occurred while fetching units' });
  }
};

// Fetch a unit by ID
exports.getUnitById = async (req, res) => {
  try {
    const unitId = req.params.id;
    const unit = await Unit.findById(unitId);
    
    if (!unit) {
      return res.status(404).json({ error: 'Unit not found' });
    }

    res.status(200).json(unit);
  } catch (error) {
    console.error('Error fetching unit:', error);
    res.status(500).json({ error: 'An error occurred while fetching unit' });
  }
};

// Update unit by ID
exports.updateUnit = async (req, res) => {
  try {
    const unitId = req.params.id;
    const updatedData = req.body;
    
    const updatedUnit = await Unit.findByIdAndUpdate(unitId, updatedData, { new: true });

    if (!updatedUnit) {
      return res.status(404).json({ error: 'Unit not found' });
    }

    res.status(200).json(updatedUnit);
  } catch (error) {
    console.error('Error updating unit:', error);
    res.status(500).json({ error: 'An error occurred while updating unit' });
  }
};

// Delete unit by ID
exports.deleteUnit = async (req, res) => {
  try {
    const unitId = req.params.id;
    
    const deletedUnit = await Unit.findByIdAndDelete(unitId);

    if (!deletedUnit) {
      return res.status(404).json({ error: 'Unit not found' });
    }

    res.status(200).json({ message: 'Unit deleted successfully' });
  } catch (error) {
    console.error('Error deleting unit:', error);
    res.status(500).json({ error: 'An error occurred while deleting the unit' });
  }
};

