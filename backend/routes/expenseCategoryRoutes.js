// routes/expenseCategoryRoutes.js
const express = require('express');
const expenseCategoryController = require('../controllers/expenseCategoryController');
const router = express.Router();
const { body, param } = require('express-validator');

// Create a new expense category
router.post('/api/categories', expenseCategoryController.createExpenseCategory);

// Fetch all expense categories
router.get('/api/categories', expenseCategoryController.getAllExpenseCategories);

// Fetch a single expense category by ID
router.get('/api/categories/:categoryId', expenseCategoryController.getExpenseCategoryById);

// Update an expense category by ID
router.put('/api/categories/:categoryId', [
    param('categoryId').isMongoId(),
    body('name').notEmpty(),
], expenseCategoryController.updateExpenseCategory);

// Delete an expense category by ID
router.delete('/api/categories/:categoryId', [
    param('categoryId').isMongoId(), //validate the category ID
], expenseCategoryController.deleteExpenseCategory);


module.exports = router;