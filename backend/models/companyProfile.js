const mongoose = require('mongoose');

const companyProfileSchema = new mongoose.Schema({
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
        required: true
    },
    phoneNumberExtension: {
        type: Number,
        required: true,
    },
    alternatePhone: {
        type: Number,
        required: false,
    },
    alternatePhoneExtension: {
        type: Number,
        required: false,
    },
    number: {
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
        required: true
    },
    taxId: {
        type: Number,
        required: true,
    }
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

module.exports = CompanyProfile;