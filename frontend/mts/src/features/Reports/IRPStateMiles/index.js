import React, { useState, useEffect } from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Button, ButtonGroup, TextField } from '@material-ui/core';
import axios from 'axios';

export default function IRPStateMilesReport() {
  const [unitData, setUnitData] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUnitData();
  }, []);

  const fetchUnitData = async () => {
    try {
      const response = await axios.get('/api/units');
      setUnitData(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching unit data:', error);
      setError('Failed to fetch unit data. Please try again later.');
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform search based on the searchQuery
    // ...
  };

  return (
    <div>
      <Typography variant="h6">IRP State Miles Report</Typography>

      <Button variant="contained" color="primary" onClick={fetchUnitData}>
        Refresh
      </Button>

      <Button variant="contained" color="primary">
        Add Unit
      </Button>

      <ButtonGroup>
        <Button
          variant="contained"
          color={filter === 'all' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('all')}
        >
          All
        </Button>
        <Button
          variant="contained"
          color={filter === 'active' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </Button>
        <Button
          variant="contained"
          color={filter === 'inactive' ? 'primary' : 'default'}
          onClick={() => handleFilterChange('inactive')}
        >
          Inactive
        </Button>
      </ButtonGroup>

      <TextField
        label="Search"
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />

      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {error && <Typography variant="body1">{error}</Typography>}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Unit Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Make/Model</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>License Plate</TableCell>
            <TableCell>License Exp</TableCell>
            <TableCell>Inspection Exp</TableCell>
            <TableCell>Insurance Exp</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unitData.map((unit) => (
            <TableRow key={unit.id}>
              <TableCell>{unit.number}</TableCell>
              <TableCell>{unit.unitNumber}</TableCell>
              <TableCell>{unit.type}</TableCell>
              <TableCell>{unit.makeModel}</TableCell>
              <TableCell>{unit.status}</TableCell>
              <TableCell>{unit.licensePlate}</TableCell>
              <TableCell>{unit.licenseExp}</TableCell>
              <TableCell>{unit.inspectionExp}</TableCell>
              <TableCell>{unit.insuranceExp}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  View
                </Button>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="primary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
