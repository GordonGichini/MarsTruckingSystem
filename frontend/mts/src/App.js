import {HomePage, SignInSide, SignUpSide, ErrorPage, Dashboard, ProfilePage} from "./pages";
import {Trips, Expenses, Invoices, Maintenance, Drivers, Addresses, Units} from "./features";
import { EmptyMove, DetailedList } from "./features/Dispatches";
import { AddCategoryForm, ListCategories } from "./features/Expenses";
import { MaintenancePlans, NewCalendarPlan, NewMilePlan } from "./features/Maintenances";
import { CompanyOverview, ExpensesReport, FuelExpenses, FuelVendor, IRPStateMiles, OverTheRoadDays, ProfitAndLoss, QuarterlyIFTA, QuarterlyMaintenance, ReeferFuelExpenses, Settlement, Tax, UnitOperatingIncome } from './features/Reports';
import { EditPage } from "./pages/ProfilePage";
import InNavBar from "./common/Header/InNavBar";
import OutNavBar from "./common/Header/OutNavBar";
import {Route, Routes} from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import theme from './theme';
import HomepageLayout from "./Layout/HomepageLayout";
import DashboardLayout from "./Layout/DashboardLayout";
//remember to add routes
import { DispatchFormPage, ExpenseFormPage, MaintenanceLogEntryFormPage, DriverFormPage, UnitFormPage, AddressFormPage, ReportsFormPage } from './components';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Routes> 
        <Route path="/" element={<HomepageLayout><HomePage /></HomepageLayout>} />
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/signup" element={<SignUpSide/>} />
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /> </DashboardLayout>} /> 

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

        <Route path="/company_overview" element={<CompanyOverview/>} />
        <Route path="/expenses" element={<ExpensesReport/>} />
        <Route path="/fuel_expenses" element={<FuelExpenses/>} />
        <Route path="/fuel_vendor" element={<FuelVendor/>} />
        <Route path="/irp_statemiles" element={<IRPStateMiles/>} />
        <Route path="/over_the_road_days" element={<OverTheRoadDays/>} />
        <Route path="/profit_and_loss" element={<ProfitAndLoss/>} />
        <Route path="/quarterly_ifta" element={<QuarterlyIFTA/>} />
        <Route path="/quarterly_maintenance" element={<QuarterlyMaintenance/>} />
        <Route path="/reefer_fuel_expenses" element={<ReeferFuelExpenses/>} />
        <Route path="/driver_pay" element={<Settlement/>} />
        <Route path="/tax" element={<Tax/>} />
        <Route path="/unit_operating_income" element={<UnitOperatingIncome/>} />


        <Route path="/new-calendar-plan" element={<NewCalendarPlan/>} />
        <Route path="/new-mile-plan" element={<NewMilePlan/>} />
        <Route path="/reports" element={<ReportsFormPage/>} />
        <Route path="/detailedlist" element={<DetailedList/>} />
        <Route path="/empty-move" element={<EmptyMove/>} />
        <Route path="/addresses" element={<Addresses/>} />
        <Route path="/units" element={<Units/>} />
        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

