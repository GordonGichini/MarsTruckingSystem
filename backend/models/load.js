const mongoose = require('mongoose');

const loadSchema = new mongoose.Schema({
  // Fields specific to loads
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  // Fields from the planned load (inherited)
  customLoadNumber: {
    type: String,
    required: true,
    unique: true,
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
  instructions: {
    type: String,
    required: false,
  },
  bol: {
    type: String,
    required: true,
  },
  customerRequiredInfo: {
    type: String,
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
    required: true,
  },
  consignee: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
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
  additional: {
    type: String,
    required: true,
  },
  invoiceAdvance: {
    type: Number,
    required: true,
  },
});

const Load = mongoose.model('Load', loadSchema);

module.exports = Load;
