const mongoose = require('mongoose');

const milePlanSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    mileageInterval: {
        type: Number,
        required: true,
    },
    units: {
        type: String,
        required: true
    }
});

const MilePlan = mongoose.model('MilePlan', milePlanSchema);

module.exports = MilePlan;