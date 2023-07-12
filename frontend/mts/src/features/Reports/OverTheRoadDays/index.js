import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function OverTheRoadDaysReport() {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState('');
  const [reportData, setReportData] = useState([]);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      const response = await axios.get('/api/drivers');
      setDrivers(response.data);
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const handleGenerateReport = () => {
    // Perform logic to generate the report data based on selectedDriver
    // ...
  };

  return (
    <div>
      <Typography variant="h6">Over the Road Days Report</Typography>

      <div>
        {drivers.map((driver) => (
          <label key={driver.id}>
            <input
              type="radio"
              name="driver"
              value={driver.id}
              checked={selectedDriver === driver.id}
              onChange={() => setSelectedDriver(driver.id)}
            />
            {driver.name}
          </label>
        ))}
      </div>

      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      <Button variant="contained" color="primary">
        New Report
      </Button>
      <Button variant="contained" color="primary">
        Print
      </Button>
      <Button variant="contained" color="primary">
        Export Spreadsheet
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Report Dates</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Total Days</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.reportDates}</TableCell>
              <TableCell>{report.driver}</TableCell>
              <TableCell>{report.totalDays}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Driver</TableCell>
            <TableCell>Days</TableCell>
            <TableCell>No. of Trips</TableCell>
            <TableCell>Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map((report) => (
            <TableRow key={report.id}>
              <TableCell>{report.driver}</TableCell>
              <TableCell>{report.days}</TableCell>
              <TableCell>{report.numberOfTrips}</TableCell>
              <TableCell>{report.details}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
