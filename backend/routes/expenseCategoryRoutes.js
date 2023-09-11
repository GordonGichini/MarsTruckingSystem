// routes/expenseCategoryRoutes.js
const express = require('express');
const expenseCategoryController = require('../controllers/expenseCategoryController');
const router = express.Router();
const { check, param } = require('express-validator');

// Create a new expense category
router.post('/', expenseCategoryController.createExpenseCategory);

// Fetch all expense categories
router.get('/', expenseCategoryController.getAllExpenseCategories);

// Fetch a single expense category by ID
router.get('/:id', expenseCategoryController.getExpenseCategoryById);

// Update an expense category by ID
router.put('/:id', [
    param('id').isMongoId(),
    check('name').notEmpty(),
], expenseCategoryController.updateExpenseCategory);

// Delete an expense category by ID
router.delete('/:id', [
    param('id').isMongoId(), 
], expenseCategoryController.deleteExpenseCategory);


module.exports = router;