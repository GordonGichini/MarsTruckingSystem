const mongoose = require('mongoose');

const maintenanceLogEntrySchema = new mongoose.Schema({
    unit: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    maintenanceVendor: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    repairDate: {
        type: Date,
        required: true,
    },
    odometer: {
        type: Number,
        required: true,
    }
});


const MaintenanceLogEntry = mongoose.model('MaintenanceLogEntry', maintenanceLogEntrySchema);

module.exports = MaintenanceLogEntry;