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
  trip: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
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
  state: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExpenseCategory',
  },
});

/*expenseSchema.index({ someField: 1 }, { unique: true });*/

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;