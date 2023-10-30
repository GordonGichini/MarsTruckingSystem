import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';


export const fetchExpensesAsync = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        console.log('Fetching expenses...')
        const data = await api.fetchExpenses();
        return data;
    }
);

export const fetchExpenseDetailsAsync = createAsyncThunk(
    'expenses/fetchExpenseDetails',
    async (expenseId) => {
        const data = await api.fetchExpenseDetails(expenseId);
        return data;
    }
);

export const updateExpenseAsync = createAsyncThunk(
    'expenses/updateExpense',
    async (updatedExpense) => {
        const response = await api.updateExpense(updatedExpense);
        return response.data;
    }
);

export const deleteExpenseAsync = createAsyncThunk(
    'expenses/deleteExpense',
    async (idToDelete) => {
        await api.deleteExpense(idToDelete);
        return idToDelete;
    }
);



// Async thunk to save expense
export const saveExpenseDataAsync = createAsyncThunk(
    'expenses/saveExpenseData',
    async (expenseData) => {
        const response = await api.saveExpenseData(expenseData);
        return response.data
    }
);

// Define the initial state for the expense slice
const initialState = {
    expenses: [],
    expenseDetails: null,
    loading: false,
    error: null,
    newExpenseId: null,
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        setExpenses: (state, action) => {
            state.expenses = action.payload;
        },
        setExpenseDetails: (state, action) => {
            state.expenseDetails = action.payload;
        },
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
        },
        updateExpense: (state, action) => {
            const { id, updatedExpense } = action.payload;
            const index = state.expenses.findIndex((expense) => expense.id === id);
            if (index !== -1) {
                state.expenses[index] = updatedExpense;
            }
        },
        deleteExpense: (state, action) => {
            const idToDelete = action.payload;
            state.expenses = state.expenses.filter((expense) => expense.id !== idToDelete);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(saveExpenseDataAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(saveExpenseDataAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.expenses.push(action.payload);
            state.newExpenseId = action.payload.id;
        })
        .addCase(saveExpenseDataAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(fetchExpensesAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchExpensesAsync.fulfilled, (state, action) => {
            console.log('Expense fetched successfully:', action.payload);
            state.loading = false;
            state.expenses = action.payload;
          })
            
          .addCase(fetchExpensesAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
          .addCase(fetchExpenseDetailsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchExpenseDetailsAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.expenseDetails = action.payload;
          })
          .addCase(fetchExpenseDetailsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
    },
});

export const selectExpenses = (state) => state.expenses;
export const selectExpenseDetails = (state) => state.expenses.expenseDetails;

export const { addExpense, setExpenses, setExpenseDetails, updateExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

