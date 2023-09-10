const mongoose = require('mongoose');

const expenseCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
});

const ExpenseCategory = mongoose.model('ExpenseCategory', expenseCategorySchema);

module.exports = ExpenseCategory;