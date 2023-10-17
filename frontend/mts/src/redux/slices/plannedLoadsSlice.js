import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';
import { createSelector } from 'reselect';

export const fetchPlannedLoadsAsync = createAsyncThunk(
    'plannedLoads/fetchPlannedLoads',
    async () => {
        try {
        const data = await api.fetchPlannedLoads();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch planned loads');
    }
  }
);

export const createPlannedLoadAsync = createAsyncThunk(
    'plannedLoads/createPlannedLoad',
    async (newPlannedLoad, { rejectWithValue }) => {
        try {
        const response = await api.createPlannedLoad(newPlannedLoad);
        return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
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
        state.plannedLoads = [
          ...state.plannedLoads.slice(0, index),
          updatedLoad,
          ...state.plannedLoads.slice(index + 1),
        ];
      }
    },
    plannedLoadRemoved: (state, action) => {
      // Remove a planned load by ID
      const idToRemove = action.payload;
      state.plannedLoads = state.plannedLoads.filter((load) => load.id !== idToRemove);
    },
    setPlannedLoads: (state, action) => {
      state.plannedLoads = action.payload;
    },
  },
});

export const {
  plannedLoadAdded,
  plannedLoadUpdated,
  setPlannedLoads,
  plannedLoadRemoved,
} = plannedLoadsSlice.actions;


//Defining a base selector to get the plannedLoads slice
const selectPlannedLoadsSlice = (state) => state.plannedLoads;

export const selectPlannedLoads = createSelector(
  [selectPlannedLoadsSlice],
  (plannedLoadsSlice) => plannedLoadsSlice.plannedLoads
);

export default plannedLoadsSlice.reducer;
