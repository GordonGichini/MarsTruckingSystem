import { configureStore } from '@reduxjs/toolkit';
import  addressSlice from './slices/addressSlice';
import plannedLoadsSlice from './slices/plannedLoadsSlice';
import companySlice from './slices/companySlice';
import driverSlice from './slices/driverSlice';
import unitSlice from './slices/unitSlice';
import expenseSlice from './slices/expenseSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        addresses: addressSlice.reducer,
        plannedLoads: plannedLoadsSlice.reducer,
        company: companySlice.reducer,
        driver: driverSlice.reducer,
        unit: unitSlice.reducer,
        expenses: expenseSlice.reducer,
    },
});

export default store;
