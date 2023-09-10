// routes/expenseCategoryRoutes.js
const express = require('express');
const expenseCategoryController = require('../controllers/expenseCategoryController');
const router = express.Router();
const { body, param } = require('express-validator');

// Create a new expense category
router.post('/expenseCategories', expenseCategoryController.createExpenseCategory);

// Fetch all expense categories
router.get('/expenseCategories', expenseCategoryController.getAllExpenseCategories);

// Fetch a single expense category by ID
router.get('/expenseCategories/:id', expenseCategoryController.getExpenseCategoryById);

// Update an expense category by ID
router.put('/expenseCategories/:id', [
    param('expenseCategoryId').isMongoId(),
    body('name').notEmpty(),
], expenseCategoryController.updateExpenseCategory);

// Delete an expense category by ID
router.delete('/expenseCategories/:id', [
    param('expenseCategoryId').isMongoId(), //validate the category ID
], expenseCategoryController.deleteExpenseCategory);


module.exports = router;