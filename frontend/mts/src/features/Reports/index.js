import React from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import { Typography, Button, Box, Grid } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import CompanyOverview from './CompanyOverview';
import ExpensesReport from './ExpensesReport';
import FuelExpenses from './FuelExpenses';
import FuelVendor from './FuelVendor';
import IRPStateMiles from './IRPStateMiles';
import OverTheRoadDays from './OverTheRoadDays';
import ProfitAndLoss from './ProfitAndLoss';
import QuarterlyIFTA from './QuarterlyIFTA';
import QuarterlyMaintenance from './QuarterlyMaintenance';
import ReeferFuelExpenses from './ReeferFuelExpenses';
import Settlement from './Settlement';
import Tax from './Tax';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import UnitOperatingIncome from './UnitOperatingIncome';

export { 
  CompanyOverview, 
  ExpensesReport, 
  FuelExpenses, 
  FuelVendor, 
  IRPStateMiles, 
  OverTheRoadDays, 
  ProfitAndLoss, 
  QuarterlyIFTA, 
  QuarterlyMaintenance, 
  ReeferFuelExpenses, 
  Settlement, 
  Tax, 
  UnitOperatingIncome
}

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'

  }

}));



export default function ReportsPage() {
  const theme = useTheme();
  const classes = useStyles();
  const handleButtonClick = (reportName) => {
    // Logic for handling button click based on report name
    console.log(`Clicked on ${reportName}`);
  };

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
      <Typography variant="h6">Reports</Typography>
     
      <Box className={classes.buttonContainer}> 
      <Stack direction="column" spacing={2}>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Company Overview')} 
        component={Link} 
        to="/company_overview">
          Company Overview
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Tax')}
        component={Link} 
        to="/tax">
          Tax
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Profit and Loss')}
        component={Link} 
        to="/profit_and_loss">
          Profit and Loss
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Driver Settlement')} 
        component={Link} 
        to="/driver_pay">
          Driver Settlement
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Expenses')} 
        component={Link} 
        to="/expenses">
          Expenses
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('IRP-State Miles')} 
        component={Link} 
        to="/irp_statemiles">
          IRP-State Miles
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Fuel Expenses')} 
        component={Link} 
        to="/fuel_expenses">
          Fuel Expenses
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Reefer Fuel Expenses')} 
        component={Link} 
        to="/reefer_fuel_expenses">
          Reefer Fuel Expenses
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Fuel Vendor')} 
        component={Link} 
        to="/fuel_vendor">
          Fuel Vendor
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Quarterly ITFA')} 
        component={Link} 
        to="/quarterly_ifta">
          Quarterly ITFA
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Quarterly Maintenance')} 
        component={Link} 
        to="/quarterly_maintenance">
          Quarterly Maintenance
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Revenue')} 
        component={Link} 
        to="/unit_revenue">
          Unit Revenue
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Operating Income')} 
        component={Link} 
        to="/unit_operating_income">
          Unit Operating Income
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Miles per Gallon')} 
        component={Link} 
        to="/">
          Miles per Gallon
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Unit Miles')} 
        component={Link} 
        to="/">
          Unit Miles
        </Button>
        <Button variant="outlined" 
        color="primary" 
        onClick={() => handleButtonClick('Over the Road Days')} 
        component={Link} 
        to="/over_the_road_days">
          Over the Road Days
        </Button>
        </Stack>
      </Box>
      
    </div>
  );
}
