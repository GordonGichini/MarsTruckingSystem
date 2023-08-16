const mongoose = require('mongoose');

const getMilesSchema = new mongoose.Schema({
    streetFrom: {
        type: String,
        required: true,
    },
    cityFrom: {
        type: String,
        required: true,
    },
    stateFrom: {
        type: String,
        required: true
    },
    streetTo: {
        type: String,
        required: true,
    },
    cityTo: {
        type: String,
        required: true,
    },
    stateTo: {
        type: String,
        required: true
    }
});

const GetMiles = mongoose.model('GetMiles', getMilesSchema);

module.exports = GetMiles;