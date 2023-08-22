const mongoose = require('mongoose');

const plannedLoadSchema = new mongoose.Schema({
  load: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Load',
    required: true
  },
  customLoadNumber: {
    type: Number,
    required: false,
  },
  customer: {
    type: String,
    required: true,
  },
  shipper: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: Date,
    required: true,
  },
  driverInstructions: {
    type: String,
    required: false,
  },
  bol: {
    type: String,
    required: true,
  },
  customerRequiredInfo: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  commodity: {
    type: String,
    required: true
  },
  consignee: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  instructions: {
    type: String,
    required: false,
  },
  primaryFee: {
    type: Number,
    required: true,
  },
  primaryFeeType: {
    type: String,
    required: true,
  },
  fscAmount: {
    type: Number,
    required: true,
  },
  fscAmountType: {
    type: String,
    required: true,
  },
  detention: {
    type: Number,
    required: true,
  },
  lumper: {
    type: Number,
    required: true,
  },
  stopOff: {
    type: Number,
    required: true,
  },
  tarpFee: {
    type: Number,
    required: true,
  },
  invoiceAdvance: {
    type: Number,
    required: true
  }
});

const PlannedLoad = mongoose.model('PlannedLoad', plannedLoadSchema);

module.exports = PlannedLoad;
