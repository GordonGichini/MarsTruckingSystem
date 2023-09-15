const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    loads: [{
        type: Number,
        ref: 'Load',
        required: true,
    }],
    customTripNumber: {
      type: Number,
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
    routingStop: {
        type: String,
        required: false
    },
    routingStopDate: {
        type: Date,
        required: false
    },
    instructions: {
        type: String,
        required: false
    },
    notes: {
        type: String,
        required: false
    },
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