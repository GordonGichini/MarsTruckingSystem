import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api';


// Async thunk to save expense
export const saveExpenseDataAsync = createAsyncThunk(
    'expense/saveExpenseData',
    async (expenseData) => {
        const response = await api.saveExpenseData(expenseData);
        return response.data
    }
);


// Define the initial state for the expense slice
const initialState = {
    expense: null,
    loading: false,
    error: null,
};

const expenseSlice = createSlice({
    name: 'expense',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(saveExpenseDataAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(saveExpenseDataAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.expense = action.payload;
        })
        .addCase(saveExpenseDataAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default expenseSlice.reducer;

