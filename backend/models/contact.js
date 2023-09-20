const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  contactType: {
    type: String,
    required: true,
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

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
