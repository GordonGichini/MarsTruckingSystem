import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function QuarterlyMaintenanceReports() {
  const [selectedQuarter, setSelectedQuarter] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedUnits, setSelectedUnits] = useState([]);

  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const response = await axios.get('/api/maintenance-reports');
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching maintenance report data:', error);
    }
  };

  const handleGenerateReport = async () => {
    // Perform API call to generate quarterly maintenance report with selectedQuarter, selectedYear, selectedUnits
    try {
      const response = await axios.post('/api/maintenance-reports', {
        quarter: selectedQuarter,
        year: selectedYear,
        units: selectedUnits,
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error generating maintenance report:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Quarterly Maintenance Reports</Typography>

      <Typography variant="subtitle1">Choose Quarter</Typography>
      {/* Render quarter selection input (e.g., dropdown or radio buttons) */}
      {/* Set the selectedQuarter state when a quarter is selected */}

      <Typography variant="subtitle1">Choose Year</Typography>
      {/* Render year selection input (e.g., dropdown) */}
      {/* Set the selectedYear state when a year is selected */}

      <Typography variant="subtitle1">Choose Units</Typography>
      {/* Render unit selection input (e.g., checkboxes) */}
      {/* Set the selectedUnits state when units are selected */}

      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Truck</TableCell>
            <TableCell>Odometer</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Short Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.truck}</TableCell>
              <TableCell>{row.odometer}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.shortDescription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
