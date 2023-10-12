import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api'; 

// Define the initial state for the driver data
const initialState = {
  driver: null, // Driver data
  status: 'idle', // Request status: idle, loading, succeeded, or failed
  error: null, // Request error message
};

// Create an asynchronous thunk to save driver data
export const saveDriverDataAsync = createAsyncThunk(
  'driver/saveDriverData',
  async (driverData) => {
    const response = await api.saveDriverData(driverData); // Implement this function in your API module
    return response.data;
  }
);

// Create a driver slice
const driverSlice = createSlice({
  name: 'driver',
  initialState,
  reducers: {
    // You can add synchronous actions here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveDriverDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveDriverDataAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.driver = action.payload;
      })
      .addCase(saveDriverDataAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


// Export a selector to retrieve the driver data from the state
export const selectDriver = (state) => state.driver;

// Export the reducer
export default driverSlice.reducer;
