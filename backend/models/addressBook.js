const mongoose = require('mongoose');

const addressBookSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['customer', 'shipper', 'consignee', 'maintenance_vendor', 'fuel_vendor', 'driver' ],
  },
  companyName: {
    type: String,
    required: true,
  },
  street: String,
  aptSuite: String,
  city: String,
  state: String,
  zipCode: String,
  phoneNumber: String,
  phoneExtension: String,
  alternatePhoneNumber: String,
  alternatePhoneExtension: String,
  faxNumber: String,
  emailAddress: String,
  website: String,
  contactName: String,
  notes: String,
  motorCarrierNumber: String,
  taxId: String,

  // Add more fields as needed
});

const AddressBook = mongoose.model('AddressBook', addressBookSchema);

module.exports = AddressBook;
