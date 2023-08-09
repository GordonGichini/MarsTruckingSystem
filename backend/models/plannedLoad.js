const mongoose = require('mongoose');

const plannedLoadSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  shipmentDate: {
    type: Date,
    required: true,
  },
  truckType: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const PlannedLoad = mongoose.model('PlannedLoad', plannedLoadSchema);

module.exports = PlannedLoad;
