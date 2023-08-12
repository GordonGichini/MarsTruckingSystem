const ExpenseCategory = require('../models/expenseCategories');

// create a new expense category
exports.createExpenseCategory = async (req, res) => {
    try {
        const { name, status } = req.body;
    
    const newExpenseCategory = new ExpenseCategory({
        name, status
    });
    const savedExpenseCategory = await newExpenseCategory.save();
    res.status(201).json(savedExpenseCategory);
} catch (error) {
    console.error('Error creating expensecategory:', error);
    res.status(500).json({ error: 'An error occurred while creating the expense category' });
}
};

// Fetch all expense categories
exports.getAllExpenseCategories = async (req, res) => {
    try {
        const expenseCategories = await ExpenseCategory.find();
        res.status(200).json(expenseCategories);
    } catch (error) {
        console.error('Error fetching expense categories:', error);
        res.status(500).json({ error: 'An error occurred while fetching expense categories' });
    }
};

// Fetch a single expense category by ID
exports.getExpenseCategoryById = async (req, res) => {
    try {
      const expenseCategoryId = req.params.id;
      const expenseCategory = await ExpenseCategory.findById(expenseCategoryId);
      
      if (!expenseCategory) {
        return res.status(404).json({ error: 'Expense Category not found' });
      }
  
      res.status(200).json(expenseCategory);
    } catch (error) {
      console.error('Error fetching expense category:', error);
      res.status(500).json({ error: 'An error occurred while fetching the expense category' });
    }
  };
  
  // Update an expense category by ID
  exports.updateExpenseCategory = async (req, res) => {
    try {
      const expenseCategoryId = req.params.id;
      const updatedData = req.body;
      
      const updatedExpenseCategory = await ExpenseCategory.findByIdAndUpdate(expenseCategoryId, updatedData, { new: true });
  
      if (!updatedExpenseCategory) {
        return res.status(404).json({ error: 'Expense Category not found' });
      }
  
      res.status(200).json(updatedExpenseCategory);
    } catch (error) {
      console.error('Error updating expense category:', error);
      res.status(500).json({ error: 'An error occurred while updating the expense category' });
    }
  };
  
  // Delete an expense category by ID
  exports.deleteExpenseCategory = async (req, res) => {
    try {
      const expenseCategoryId = req.params.id;
      
      const deletedExpenseCategory = await ExpenseCategory.findByIdAndDelete(expenseCategoryId);
  
      if (!deletedExpenseCategory) {
        return res.status(404).json({ error: 'Expense Category not found' });
      }
  
      res.status(200).json({ message: 'Expense Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting expense category:', error);
      res.status(500).json({ error: 'An error occurred while deleting the expense category' });
    }
  };
  
  
