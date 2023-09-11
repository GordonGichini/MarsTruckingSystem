const express = require('express');
const expenseController = require('../controllers/expenseController');
const router = express.Router();

// Create a new expense
router.post('/', expenseController.createExpense);

// Fetch all expenses
router.get('/', expenseController.getAllExpenses);

// Fetch a single expense by ID
router.get('/:id', expenseController.getExpenseById);

// Update an expense by ID
router.put('/:id', expenseController.updateExpense);

// Delete an expense by ID
router.delete('/:id', expenseController.deleteExpense);


module.exports = router;
