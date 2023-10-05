import { configureStore } from '@reduxjs/toolkit';
import  addressSlice from './slices/addressSlice';
import plannedLoadsSlice from './slices/plannedLoadsSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        addresses: addressSlice.reducer,
        plannedLoads: plannedLoadsSlice.reducer,
    },
});

export default store;
