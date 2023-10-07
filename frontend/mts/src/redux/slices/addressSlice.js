import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api';


export const fetchAddressesAsync = createAsyncThunk(
  '/addresses',
  async () => {
    const data = await api.fetchAddresses();
    return data;
  }
);

export const createAddressAsync = createAsyncThunk(
  '/addresses',
  async (newAddress) => {
    const response = await api.createAddress(newAddress); // Replace with your API call
    return response.data;
  }
);

export const updateAddressAsync = createAsyncThunk(
  '/addresses/:id',
  async (updatedAddress) => {
    const response = await api.updateAddress(updatedAddress);
    return response.data;
  }
);

export const deleteAddressAsync = createAsyncThunk(
  '/addresses/delete',
  async (idToDelete) => {
    await api.deleteAddress(idToDelete);
    return idToDelete;
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [],
    status: 'idle',
    error: null,
  },
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
      state.error = null;
    })
    .addCase(fetchAddressesAsync.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
    .addMatcher(
      (action) =>
      action.type.endsWith('AddressAsync/pending') ||
      action.type.endsWith('AddressAsync/rejected'),
      (state) => {
        state.status = 'loading';
        state.error = null;
      }
    )
    .addMatcher(
      (action) => 
      action.type.endsWith('AddressesAsync/fulfilled'),
      (state) => {
        state.status = 'succeeded';
        state.error = null;
      }
    );
  },
});


export const { addAddress, updateAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;