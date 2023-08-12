// routes/expenseCategoryRoutes.js
const express = require('express');
const expenseCategoryController = require('../controllers/expenseCategoryController');
const router = express.Router();

// Create a new expense category
router.post('/create', expenseCategoryController.createExpenseCategory);

// Fetch all expenses
router.get('/get', expenseCategoryController.getAllExpenseCategories);

// Fetch a single expense by ID
router.get('/:id', expenseCategoryController.getExpenseCategoryById);

// Update an expense by ID
router.put('/:id', expenseCategoryController.updateExpenseCategory);

// Delete an expense by ID
router.delete('/:id', expenseCategoryController.deleteExpenseCategory);


module.exports = router;