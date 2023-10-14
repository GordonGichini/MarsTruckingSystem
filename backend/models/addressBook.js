const mongoose = require('mongoose');

const addressBookSchema = new mongoose.Schema({
  entry: {
    type: String,
    required: true,
    enum: ['customer', 'shipper', 'consignee', 'maintenance_vendor', 'fuel_vendor', 'driver'],
  },
  companyName: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  apt: {
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
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  phoneNumberExtension: {
    type: Number,
    required: true,
  },
  alternatePhone: {
    type: Number,
    required: true,
  },
  alternatePhoneExtension: {
    type: Number,
    required: true,
  },
  fax: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  motorCarrierNumber: {
    type: Number,
    required: true,
  },

  taxId: {
    type: Number,
    required: true,
  }

  // Add more fields as needed
});

const AddressBook = mongoose.model('AddressBook', addressBookSchema);

module.exports = AddressBook;
