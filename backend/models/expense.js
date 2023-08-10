const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  expenseCategory: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignToTrip: {
    type: Boolean,
    required: true,
  },
  expenseDate: {
    type: Date,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  gallons: {
    type: Number,
    required: true,
  },
  odometer: {
    type: Number,
    required: true,
  },
  fuelVendor: {
    type: String,
    required: true,
  },
  stateProvince: {
    type: String,
    required: true,
  }
});

expenseSchema.index({ someField: 1 }, { unique: true });

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;