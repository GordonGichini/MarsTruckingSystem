import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import Stack from '@mui/material/Stack'

export default function ReportsPage() {
  const handleButtonClick = (reportName) => {
    // Logic for handling button click based on report name
    console.log(`Clicked on ${reportName}`);
  };

  return (
    <div style={{ flex: 1 }}>
      <Typography variant="h6">Reports</Typography>
      <Box my={2}> 
      <Stack direction="column" spacing={2} />
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Company Overview')}>
          Company Overview
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Tax')}>
          Tax
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Profit and Loss')}>
          Profit and Loss
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Driver Settlement')}>
          Driver Settlement
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Expenses')}>
          Expenses
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('IRP-State Miles')}>
          IRP-State Miles
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Fuel Expenses')}>
          Fuel Expenses
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Reefer Fuel Expenses')}>
          Reefer Fuel Expenses
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Fuel Vendor')}>
          Fuel Vendor
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Quarterly ITFA')}>
          Quarterly ITFA
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Quarterly Maintenance')}>
          Quarterly Maintenance
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Unit Revenue')}>
          Unit Revenue
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Unit Operating Income')}>
          Unit Operating Income
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Miles per Gallon')}>
          Miles per Gallon
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Unit Miles')}>
          Unit Miles
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick('Over the Road Days')}>
          Over the Road Days
        </Button>
      </Box>
    </div>
  );
}
