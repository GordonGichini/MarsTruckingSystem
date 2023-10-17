import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';


export const fetchExpensesAsync = createAsyncThunk(
    'expenses/fetchExpenses',
    async () => {
        const data = await api.fetchExpenses();
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
    loading: false,
    error: null,
};

const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
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
        })
        .addCase(saveExpenseDataAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { addExpense, updateExpense, deleteExpense } = expenseSlice.actions;

export default expenseSlice.reducer;

