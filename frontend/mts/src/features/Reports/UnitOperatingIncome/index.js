import React, { useState, useEffect } from 'react';
import { Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import axios from 'axios';

export default function UnitOperatingIncomeReport() {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const response = await axios.get('/api/unit-operating-income-report');
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching unit operating income report data:', error);
    }
  };

  const handleGenerateReport = async () => {
    try {
      // Perform API call to generate unit operating income report
      // Pass any necessary parameters

      // Fetch the generated report data and update the state
      const response = await axios.get('/api/unit-operating-income-report');
      setReportData(response.data);
    } catch (error) {
      console.error('Error generating unit operating income report:', error);
    }
  };

  return (
    <div>
      <Typography variant="h6">Unit Operating Income Report</Typography>

      <Button variant="contained" color="primary" onClick={handleGenerateReport}>
        Generate Report
      </Button>

      {reportData && (
        <div>
          <Typography variant="h6">Unit Operating Income</Typography>
          <Table>
            {/* Render the unit operating income table */}
          </Table>
        </div>
      )}
    </div>
  );
}
