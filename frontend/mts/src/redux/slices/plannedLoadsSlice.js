import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';

export const fetchPlannedLoadsAsync = createAsyncThunk(
    'plannedLoads/fetchPlannedLoads',
    async () => {
        const response = await api.fetchPlannedLoads();
        return response.data;
    }
);

export const createPlannedLoadAsync = createAsyncThunk(
    'plannedLoads/createPlannedLoad',
    async (newPlannedLoad) => {
        const response = await api.createPlannedLoad(newPlannedLoad);
        return response.data;
    }
);

const initialState = {
  plannedLoads: [], // Initial state for planned loads
  loading: false,
  error: null,
};

const plannedLoadsSlice = createSlice({
  name: 'plannedLoads',
  initialState,
  reducers: {
    // Add reducers for CRUD operations here
    plannedLoadAdded: (state, action) => {
      state.plannedLoads.push(action.payload);
    },
    plannedLoadUpdated: (state, action) => {
      // Update an existing planned load
      const updatedLoad = action.payload;
      const index = state.plannedLoads.findIndex((load) => load.id === updatedLoad.id);
      if (index !== -1) {
        state.plannedLoads[index] = updatedLoad;
      }
    },
    plannedLoadRemoved: (state, action) => {
      // Remove a planned load by ID
      const idToRemove = action.payload;
      state.plannedLoads = state.plannedLoads.filter((load) => load.id !== idToRemove);
    },
  },
});

export const {
  plannedLoadAdded,
  plannedLoadUpdated,
  plannedLoadRemoved,
} = plannedLoadsSlice.actions;

export default plannedLoadsSlice.reducer;
