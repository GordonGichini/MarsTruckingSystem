import { configureStore } from '@reduxjs/toolkit';
import  addressSlice from './slices/addressSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        addresses: addressSlice.reducer,
    },
});

export default store;
