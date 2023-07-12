import {HomePage, SignInSide, SignUpSide, ErrorPage, Dashboard, ProfilePage} from "./pages";
import {Trips, Expenses, Invoices, Maintenance, Drivers, Addresses, Units} from "./features";
import { EmptyMove, DetailedList } from "./features/Dispatches";
import { AddCategoryForm, ListCategories } from "./features/Expenses";
import { MaintenancePlans, NewCalendarPlan, NewMilePlan } from "./features/Maintenances";
import { EditPage } from "./pages/ProfilePage";
import { InNavBar, OutNavBar } from "./common";
import {Route, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
//remember to add routes
import { DispatchFormPage, ExpenseFormPage, MaintenanceLogEntryFormPage, DriverFormPage, UnitFormPage, AddressFormPage, ReportsFormPage } from './components';

const theme = createTheme({
  // Custom theme configuration
  palette: {
    // custom color palette

  },
  typography: {
    // custom typography

  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ScopedCssBaseline>
        <CssBaseline />
      <Routes> 
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/signup" element={<SignUpSide/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />

        <Route path="/company-profile" element={<ProfilePage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/trips" element={<Trips/>} />
        <Route path="/expenses" element={<Expenses/>} />
        <Route path="/invoices" element={<Invoices/>} />
        <Route path="/add-dispatch" element={<DispatchFormPage/>} />
        <Route path="/add-expense" element={<ExpenseFormPage/>} />
        <Route path="/editpage" element={<EditPage/>} />

        <Route path="/list-categories" element={<ListCategories/>} />
        <Route path="/add-category" element={<AddCategoryForm/>} />
        <Route path="/add-log-entry" element={<MaintenanceLogEntryFormPage/>} />
        <Route path="/add-driver" element={<DriverFormPage/>} />
        <Route path="/add-unit" element={<UnitFormPage/>} />
        <Route path="/add-address" element={<AddressFormPage/>} />
        <Route path="/maintenance_logs" element={<Maintenance/>} />
        <Route path="/maintenance-plans" element={<MaintenancePlans/>} />

        <Route path="/new-calendar-plan" element={<NewCalendarPlan/>} />
        <Route path="/new-mile-plan" element={<NewMilePlan/>} />
        <Route path="/reports" element={<ReportsFormPage/>} />
        <Route path="/detailedlist" element={<DetailedList/>} />
        <Route path="/empty-move" element={<EmptyMove/>} />
        <Route path="/addresses" element={<Addresses/>} />
        <Route path="/units" element={<Units/>} />
        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
      </ScopedCssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;

