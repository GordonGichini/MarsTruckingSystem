const mongoose = require('mongoose');

const calendarPlanSchema = new mongoose.Schema({
    title: {
       type: String,
       required: true,
    },
    description: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    interval: {
        type: Number,
        required: true,
    },
    intervalPeriod: {
        type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    }
});

const CalendarPlan = mongoose.model('CalendarPlan', calendarPlanSchema);

module.exports = CalendarPlan;