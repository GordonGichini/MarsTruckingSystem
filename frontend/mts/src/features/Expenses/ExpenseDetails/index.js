import React from 'react';
//import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ExpenseDetails() {
    const { expenseId } = useParams();
    const expenses = useSelector((state) => state.expenses.expenses);

    const matchingExpense = expenses.find((expense) => expense.id === expenseId);
    
  return (
    <div>
      <h2>Expense Details</h2>
      <p>Expense Category: {matchingExpense.expenseCategory}</p>
      <p>Amount: {matchingExpense.amount}</p>
      {/* Display other expense details */}
    </div>
  );
}

export default ExpenseDetails;