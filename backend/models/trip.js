const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
});

const tripSchema = new mongoose.Schema({
    loads: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Load',
        required: true,
    }],
    customTripNumber: {
      type: String,
      required: false  
    },
    driverName: {
        type: String,
        required: true
    },
    driverPay: {
        type: Number,
        required: true
    },
    driverAdvance: {
        type: Number,
        required: true
    },
    truck: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    odometer: {
        type: Number,
        required: true
    },
    routingStops: [stopSchema],

    fuelExpenses: {
        type: String,
        required: false
    },
    truckExpenses: {
        type: String,
        required: false
    },
    reeferFuelExpenses: {
        type: String,
        required: false
    }

});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;