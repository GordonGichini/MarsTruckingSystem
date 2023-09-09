// routes/expenseRoutes.js
const express = require('express');
const expenseController = require('../controllers/expenseController');
const router = express.Router();

// Create a new expense
router.post('/expense', expenseController.createExpense);

// Fetch all expenses
router.get('/expenses', expenseController.getAllExpenses);

// Fetch a single expense by ID
router.get('/expense/:id', expenseController.getExpenseById);

// Update an expense by ID
router.put('/expense/:id', expenseController.updateExpense);

// Delete an expense by ID
router.delete('/expense/:id', expenseController.deleteExpense);


module.exports = router;
