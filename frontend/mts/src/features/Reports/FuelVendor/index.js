import React, { useEffect, useState } from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function FuelVendorReport() {
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      // Perform API call to fetch the report data from the backend
      const response = await axios.get('/api/fuel/vendor-report');
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching report data:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Fuel Vendor Report</Typography>

      {/* Render the report data table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Vendor</TableCell>
            <TableCell>Total Fuel Purchase</TableCell>
            <TableCell>Gallons</TableCell>
            <TableCell>Cost</TableCell>
            <TableCell>Cost per Gallon</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((row) => (
            <TableRow key={row.vendor}>
              <TableCell>{row.vendor}</TableCell>
              <TableCell>{row.totalFuelPurchase}</TableCell>
              <TableCell>{row.gallons}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.costPerGallon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
