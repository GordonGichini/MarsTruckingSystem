const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: false,
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
        required: false,
    },
    phone: {
        type: Number,
        required: false,
    },
    alternatePhone: {
        type: Number,
        required: false,
    },
    fax: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    defaultPaymentType: {
        type: String,
        enum: ['manual', 'loadPayPercent', 'payPerMile', 'driverContract'],
        required: true,
    },
    loadPayPercent: {
        type: Number,
        min: 0,
        max: 100,
    },
    loadedMilePay: {
        type: Number,
        min: 0,
    },
    emptyMilePay: {
        type: Number,
        min: 0,
    },
    freeMilesRange: {
        type: String,
    },
    driverContract: {
        type: String,
    },
    licenseNumber: {
        type: Number,
        required: true,
    },
    licenseExpiration: {
        type: Date,
        required: false,
    },
    licenseIssuingState: {
        type: String,
        required: true,
    },
    medicalCardRenewal: {
        type: Date,
        required: false,
    },
    hireDate: {
        type: Date,
        required: false,
    },
    terminationDate: {
        type: Date,
        required: false,
    },
    contactName: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: Number,
        required: true,
    },
    contactStreet: {
        type: String,
        required: false,
    },
    contactCity: {
        type: String,
        required: true,
    },
    contactState: {
        type: String,
        required: true
    },
    contactZipCode: {
        type: Number,
        required: false,
    }

});

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;