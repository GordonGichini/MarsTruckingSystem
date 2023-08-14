const mongoose = require('mongoose');

const loadSchema = new mongoose.Schema({
    loadNo: {
        type: Number,
        required: true,
    },
    tripNo: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    pickup: {
        type: Date,
        required: true,
    },
    delivery: {
        type: Date,
        required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    truck: {
        type: String,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    bol: {
        type: String,
        required: false,
    },
    total: {
        type: Number,
        required: true
    },
});

const Load = mongoose.model('Load', loadSchema);

module.exports = Load;