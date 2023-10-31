import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../api'; 

// Async thunk to fetch unit details by ID
export const fetchUnitDetailsAsync = createAsyncThunk(
  'unit/fetchUnitDetails',
  async (unitId) => {
    try {
      const response = await api.fetchUnitDetails(unitId);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// Async thunk to fetch units from the database
export const fetchUnitsAsync = createAsyncThunk('unit/fetchUnits', async () => {
  try {
    const response = await api.fetchUnits();
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Async thunk to save unit data
export const saveUnitDataAsync = createAsyncThunk(
  'unit/saveUnitData',
  async (unitData) => {
    try {
    const response = await api.saveUnitData(unitData); // Implement this function in your API module
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  unit: {
    number: '',
    unitType: '',
    ownershipType: '',
    status: 'active',
    vin: '',
    make: '',
    model: '',
    description: '',
    year: '',
    yearPurchased: '',
    purchasePrice: '',
    licensePlateNumber: '',
    licensePlateExpiration: '',
    inspectionStickerExpiration: '',
    insuranceExpiration: '',
    initialLocation: '',
    _id: null,
  },
  loading: false,
  error: null,
  hasInteracted: false,
  units: [],
  unitDetails: null,
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
        state.unit = { ...action.payload };
        state.newUnitId = action.payload._id;
        state.hasInteracted = true;
      })      
      .addCase(saveUnitDataAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUnitsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUnitsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.units = action.payload;
      })
      .addCase(fetchUnitsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUnitDetailsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUnitDetailsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.unitDetails = action.payload;
      })
      .addCase(fetchUnitDetailsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUnit = (state) => state.unit;

export default unitSlice.reducer;
