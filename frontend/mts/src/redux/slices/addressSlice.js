import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from './api';

const initialState = {
  addresses: [], status: 'idle', error: null
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    addAddress: (state, action) => {
     // Add a new address to the state
      state.addresses.push(action.payload);      
    },
    updateAddress: (state, action) => {
      // Update an exisiting address in the state
      const { id, updatedAddress } = action.payload;
      const index = state.addresses.findIndex((address) => address.id === id);
      if (index !== -1) {
        state.addresses[index] = updatedAddress;
      }
    },
    deleteAddress: (state, action) => {
      // Delete an address from the state by ID
      const idToDelete = action.payload;
      state.addresses = state.addresses.filter((address) => address.id !== idToDelete);
    },
    // Define more reducers as needed
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchAddressesAsync.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchAddressesAsync.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.addresses = action.payload;
    })
    .addCase(fetchAddressesAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const fetchAddressesAsync = createAsyncThunk(
  'address/fetchAddresses',
  async () => {
    const data = await api.fetchAddresses();
    return data;
  }
);

export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
