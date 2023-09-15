const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  entityType: {
    type: String,
    enum: ['MaintenanceVendor', 'Driver', 'Shipper', 'Consignee', 'Customer'],
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
