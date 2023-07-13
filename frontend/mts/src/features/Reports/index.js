import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@material-ui/core';
import CompanyOverview from './CompanyOverview';
import Expenses from './Expenses';
import FuelExpenses from './FuelExpenses';
import FuelVendor from './FuelVendor';
import IRPStateMiles from './IRPStateMiles';
import OverTheRoadDays from './OverTheRoadDays';
import ProfitAndLoss from './ProfitAndLoss';
import QuarterlyIfta from './QuarterlyIFTA';
import QuarterlyMaintenance from './QuartelyMaintenance';
import ReeferFuelExpenses from './ReeferFuelExpenses';
import SettlementReport from './Settlement';
import TaxReport from './Tax';
import UnitOperatingIncome from './UnitOperatingIncome';

export { 
  CompanyOverview, 
  Expenses, 
  FuelExpenses, 
  FuelVendor, 
  IRPStateMiles, 
  OverTheRoadDays, 
  ProfitAndLoss, 
  QuarterlyIfta, 
  QuarterlyMaintenance, 
  ReeferFuelExpenses, 
  SettlementReport, 
  TaxReport, 
  UnitOperatingIncome
}



export default function ReportsPage() {
  const handleButtonClick = (reportName) => {
    // Logic for handling button click based on report name
    console.log(`Clicked on ${reportName}`);
  };

  return (
    <div>
      <Typography variant="h6">Reports</Typography>

      <Box my={2}>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Company Overview')} 
        component={Link} 
        to="/company_overview">
          Company Overview
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Tax')}
        component={Link} 
        to="/tax">
          Tax
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Profit and Loss')}
        component={Link} 
        to="/profit_and_loss">
          Profit and Loss
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Driver Settlement')} 
        component={Link} 
        to="/driver_pay">
          Driver Settlement
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Expenses')} 
        component={Link} 
        to="/expenses">
          Expenses
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('IRP-State Miles')} 
        component={Link} 
        to="/irp_statemiles">
          IRP-State Miles
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Fuel Expenses')} 
        component={Link} 
        to="/fuel_expenses">
          Fuel Expenses
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Reefer Fuel Expenses')} 
        component={Link} 
        to="/reefer_fuel_expenses">
          Reefer Fuel Expenses
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Fuel Vendor')} 
        component={Link} 
        to="/fuel_vendor">
          Fuel Vendor
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Quarterly ITFA')} 
        component={Link} 
        to="/quarterly_ifta">
          Quarterly ITFA
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Quarterly Maintenance')} 
        component={Link} 
        to="/quarterly_maintenance">
          Quarterly Maintenance
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Revenue')} 
        component={Link} 
        to="/unit_revenue">
          Unit Revenue
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Operating Income')} 
        component={Link} 
        to="/unit_operating_income">
          Unit Operating Income
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Miles per Gallon')} 
        component={Link} 
        to="/">
          Miles per Gallon
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Miles')} 
        component={Link} 
        to="/">
          Unit Miles
        </Button>
        <Button variant="contained" 
        color="primary" 
        onClick={() => handleButtonClick('Over the Road Days')} 
        component={Link} 
        to="/over_the_road_days">
          Over the Road Days
        </Button>
      </Box>
    </div>
  );
}
