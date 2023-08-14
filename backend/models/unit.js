const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    unitType: {
        type: String,
        required: true,
    },
    ownershipType: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    vin: {
        type: Number,
        required: false,
    },
    make: {
        type: String,
        required: false,
    },
    model: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    year: {
        type: Number,
        required: false,
    },
    yearPurchased: {
        type: Number,
        required: false
    },
    purchasePrice: {
        type: Number,
        required: false
    },
    licensePlateNumber: {
        type: String,
        required: false
    },
    licensePlateExpiration: {
        type: Date,
        required: false,
    },
    informationStickerExpiration: {
        type: Date,
        required: false
    },
    insuranceExpiration: {
        type: Date,
        required: false
    },
    initialLocation: {
        type: String,
        required: false,
    }
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;