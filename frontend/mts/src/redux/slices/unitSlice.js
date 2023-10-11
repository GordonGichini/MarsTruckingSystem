import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api'; 

// Async thunk to save unit data
export const saveUnitDataAsync = createAsyncThunk(
  'unit/saveUnitData',
  async (unitData) => {
    const response = await api.saveUnitData(unitData); // Implement this function in your API module
    return response.data;
  }
);

const initialState = {
  unit: null,
  loading: false,
  error: null,
};

const unitSlice = createSlice({
  name: 'unit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveUnitDataAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveUnitDataAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.unit = action.payload;
      })
      .addCase(saveUnitDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUnit = (state) => state.unit.unit;

export default unitSlice.reducer;
