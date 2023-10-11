import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api'; 

// Define the initial state for the company slice
const initialState = {
  companyData: null, // You can set the initial value to whatever makes sense
  loading: false,
  error: null,
};

// Create an async thunk to save company data
export const saveCompanyDataAsync = createAsyncThunk(
  'company/saveCompanyData',
  async (companyData) => {
    const response = await api.saveCompanyData(companyData); 
    return response.data;
  }
);

// Create the company slice
const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    // Add any synchronous actions or reducers here if needed.
    // For example, you could add a reducer to update the companyData in the store.
    updateCompanyData: (state, action) => {
      state.companyData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveCompanyDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveCompanyDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.companyData = action.payload;
      })
      .addCase(saveCompanyDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the asynchronous thunk action
export { saveCompanyDataAsync };

// Export the synchronous actions if you have any
export const { updateCompanyData } = companySlice.actions;

// Export the reducer for your store configuration
export default companySlice.reducer;
