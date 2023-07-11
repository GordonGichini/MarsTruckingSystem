import {HomePage, SignInSide, SignUpSide, ErrorPage, Dashboard} from "./pages";
import {Trips, Expenses, Invoices, Maintenance, Drivers, Addresses, Units} from "./features";
import { EmptyMove, DetailedList } from "./features/Dispatches";
import { AddCategoryForm, ListCategories } from "./features/Expenses";
import { InNavBar, OutNavBar } from "./common";
import {Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
//remember to add routes
import { DispatchFormPage, ExpenseFormPage, MaintenanceLogEntryFormPage, DriverFormPage, UnitFormPage, AddressFormPage, ReportsFormPage } from './components';



function App() {
  return (
    <div className="App">
        <ScopedCssBaseline>
        <CssBaseline />
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/signup" element={<SignUpSide/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/trips" element={<Trips/>} />
        <Route path="/expenses" element={<Expenses/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/add-dispatch" element={<DispatchFormPage/>} />
        <Route path="/add-expense" element={<ExpenseFormPage/>} />

        <Route path="/list-categories" element={<ListCategories/>} />
        <Route path="/add-category" element={<AddCategoryForm/>} />
        <Route path="/add-log-entry" element={<MaintenanceLogEntryFormPage/>} />
        <Route path="/add-driver" element={<DriverFormPage/>} />
        <Route path="/add-unit" element={<UnitFormPage/>} />
        <Route path="/add-address" element={<AddressFormPage/>} />
        <Route path="/maintenance_logs" element={<Maintenance/>} />
        <Route path="/reports" element={<ReportsFormPage/>} />
        <Route path="/detailedlist" element={<DetailedList/>} />
        <Route path="/empty-move" element={<EmptyMove/>} />
        <Route path="/addresses" element={<Addresses/>} />
        <Route path="/units" element={<Units/>} />
        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
      </ScopedCssBaseline>
    </div>
  );
}

export default App;

