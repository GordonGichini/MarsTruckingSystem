import {HomePage, SignInSide, SignUpSide, ErrorPage, Dashboard} from "./pages";
import {Trips, Expenses, Invoices, Maintenance, Reports, Drivers, Addresses, Units} from "./features";
import { InNavBar, OutNavBar } from "./common";
import {Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
//remember to add routes
import { DispatchFormPage, ExpenseFormPage, MaintenanceLogEntryFormPage } from './components';



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
        <Route path="add-log-entry" element={<MaintenanceLogEntryFormPage/>} />
        <Route path="/maintenance_logs" element={<Maintenance/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/addresses" element={<Addresses/>} />
        <Route path="/units" element={<Units/>} />
        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
      </ScopedCssBaseline>
    </div>
  );
}

export default App;

