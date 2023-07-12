import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function QuarterlyIftaReports() {
  const [companyData, setCompanyData] = useState({});
  const [reportData, setReportData] = useState([]);

  const [selectedQuarter, setSelectedQuarter] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTrucks, setSelectedTrucks] = useState([]);

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const fetchCompanyData = async () => {
    try {
      const response = await axios.get('/api/company');
      setCompanyData(response.data);
    } catch (error) {
      console.error('Error fetching company data:', error);
    }
  };

  const handleGenerateReport = async () => {
    // Perform API call to generate IFTA report with selectedQuarter, selectedYear, selectedTrucks
    try {
      const response = await axios.post('/api/ifta-reports', {
        quarter: selectedQuarter,
        year: selectedYear,
        trucks: selectedTrucks,
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error generating IFTA report:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Quarterly IFTA Reports</Typography>

      <Typography variant="subtitle1">Choose Quarter</Typography>
      {/* Render quarter selection input (e.g., dropdown or radio buttons) */}
      {/* Set the selectedQuarter state when a quarter is selected */}

      <Typography variant="subtitle1">Choose Year</Typography>
      {/* Render year selection input (e.g., dropdown) */}
      {/* Set the selectedYear state when a year is selected */}

      <Typography variant="subtitle1">Choose Trucks</Typography>
      {/* Render truck selection input (e.g., checkboxes) */}
      {/* Set the selectedTrucks state when trucks are selected */}

      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      <Typography variant="subtitle1">Company Details</Typography>
      <Typography variant="subtitle2">Name: {companyData.name}</Typography>
      <Typography variant="subtitle2">Address: {companyData.address}</Typography>
      <Typography variant="subtitle2">Phone: {companyData.phone}</Typography>
      <Typography variant="subtitle2">Motor Carrier #: {companyData.motorCarrierNumber}</Typography>
      <Typography variant="subtitle2">IFTA Account #: {companyData.iftaAccountNumber}</Typography>

      <Typography variant="subtitle1">Report Data</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Units</TableCell>
            <TableCell>Period</TableCell>
            <TableCell>Miles per Gallon</TableCell>
            <TableCell>Total Miles</TableCell>
            <TableCell>Total Gallons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.units}</TableCell>
              <TableCell>{row.period}</TableCell>
              <TableCell>{row.milesPerGallon}</TableCell>
              <TableCell>{row.totalMiles}</TableCell>
              <TableCell>{row.totalGallons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Render state-wise data table */}
    </div>
  );
}
