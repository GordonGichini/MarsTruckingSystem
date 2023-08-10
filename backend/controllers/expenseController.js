// controllers/expenseController.js
const Expense = require('../models/expense');

// Create a new expense
exports.createExpense = async (req, res) => {
  try {
    const {
      expenseCategory,
      amount,
      description,
      assignToTrip,
      expenseDate,
      unit,
      gallons,
      odometer,
      fuelVendor,
      stateProvince,
      // Add other fields as needed
    } = req.body;
    console.log('Received Data:', req.body);

    const newExpense = new Expense({
      expenseCategory,
      amount,
      description,
      assignToTrip,
      expenseDate,
      unit,
      gallons,
      odometer,
      fuelVendor,
      stateProvince,
      // Add other fields as needed
    });

    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error creating expense:', error);
    res.status(500).json({ error: 'An error occurred while creating the expense' });
  }
};

// Fetch all expenses
exports.getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    console.error('Error fetching expenses:', error);
    res.status(500).json({ error: 'An error occurred while fetching expenses' });
  }
};

// Fetch a single expense by ID
exports.getExpenseById = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const expense = await Expense.findById(expenseId);
    
    if (!expense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.error('Error fetching expense:', error);
    res.status(500).json({ error: 'An error occurred while fetching the expense' });
  }
};

// Update an expense by ID
exports.updateExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const updatedData = req.body;
    
    const updatedExpense = await Expense.findByIdAndUpdate(expenseId, updatedData, { new: true });

    if (!updatedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json(updatedExpense);
  } catch (error) {
    console.error('Error updating expense:', error);
    res.status(500).json({ error: 'An error occurred while updating the expense' });
  }
};

// Delete an expense by ID
exports.deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    
    const deletedExpense = await Expense.findByIdAndDelete(expenseId);

    if (!deletedExpense) {
      return res.status(404).json({ error: 'Expense not found' });
    }

    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Error deleting expense:', error);
    res.status(500).json({ error: 'An error occurred while deleting the expense' });
  }
};

