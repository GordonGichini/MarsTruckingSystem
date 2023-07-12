import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function ReeferFuelExpenses() {
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');

  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const response = await axios.get('/api/reefer-fuel-expenses');
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching reefer fuel expenses data:', error);
    }
  };

  const handleGenerateReport = async () => {
    // Perform API call to generate reefer fuel expenses report with selectedStartDate, selectedEndDate, selectedUnit
    try {
      const response = await axios.post('/api/reefer-fuel-expenses', {
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        unit: selectedUnit,
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error generating reefer fuel expenses report:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Reefer Fuel Expenses</Typography>

      <Typography variant="subtitle1">Choose Start Date</Typography>
      {/* Render start date selection input */}
      {/* Set the selectedStartDate state when a start date is selected */}

      <Typography variant="subtitle1">Choose End Date</Typography>
      {/* Render end date selection input */}
      {/* Set the selectedEndDate state when an end date is selected */}

      <Typography variant="subtitle1">Choose Unit</Typography>
      {/* Render unit selection input (e.g., dropdown) */}
      {/* Set the selectedUnit state when a unit is selected */}

      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      <Typography variant="subtitle1">Reefer Fuel Expenses</Typography>
      <Typography variant="subtitle2">Period: {selectedStartDate} - {selectedEndDate}</Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell>Gallons</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.state}</TableCell>
              <TableCell>{row.gallons}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.unit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
