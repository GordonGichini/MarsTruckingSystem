import { configureStore } from '@reduxjs/toolkit';
import addressReducer from '../slices/addressSlice.js'

// Create the Redux store
const store = configureStore({
    reducer: {
        addresses: addressReducer,
    },
});

export default store;
