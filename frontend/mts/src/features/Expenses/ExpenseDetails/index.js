import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectExpenseDetails, fetchExpenseDetailsAsync } from '../../../redux/slices/expenseSlice';

function ExpenseDetails() {
  const dispatch = useDispatch();
  const expenseDetails = useSelector(selectExpenseDetails);
    const { expenseId } = useParams();
    const expenses = useSelector((state) => state.expenses.expenses);

    useEffect(() => {
      const expenseId = match.params.id;
      dispatch(fetchExpenseDetailsAsync(expenseId));
    }, [dispatch, match.params.id]);

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