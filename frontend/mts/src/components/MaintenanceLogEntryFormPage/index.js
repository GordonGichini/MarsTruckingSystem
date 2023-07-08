import React, { useState } from 'react';
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function MaintenanceLogEntryFormPage() {
  const navigate = useNavigate();

  const [unit, setUnit] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  const [maintenanceVendor, setMaintenanceVendor] = useState('');
  const [amount, setAmount] = useState('');
  const [repairDate, setRepairDate] = useState('');
  const [odometer, setOdometer] = useState('');

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleMaintenanceVendorChange = (event) => {
    setMaintenanceVendor(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRepairDateChange = (event) => {
    setRepairDate(event.target.value);
  };

  const handleOdometerChange = (event) => {
    setOdometer(event.target.value);
  };

  const handleCreateMaintenanceVendorClick = () => {
    // Perform logic for creating a maintenance vendor
    // You can access the captured input values here
  };

  const handleSaveClick = () => {
    // Perform logic for saving the maintenance log entry
    // You can access the captured input values here
  };

  const handleCancelClick = () => {
    navigate.push('/maintenance'); // Redirect to the maintenance page
  };

  return (
    <div>
      <Typography variant="h6">Maintenance Log Entry</Typography>

      <form>
        <Box my={2}>
          <FormControl>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              value={unit}
              onChange={handleUnitChange}
            >
              <MenuItem value="general">General</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TextField
          label="Short Description"
          value={shortDescription}
          onChange={handleShortDescriptionChange}
        />

        <TextField
          label="Description"
          multiline
          rows={5}
          value={description}
          onChange={handleDescriptionChange}
        />

        <TextField
          label="Maintenance Vendor"
          value={maintenanceVendor}
          onChange={handleMaintenanceVendorChange}
        />

        <Button variant="contained" color="primary" onClick={handleCreateMaintenanceVendorClick}>
          Create Maintenance Vendor
        </Button>

        <TextField
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
        />

        <Typography variant="subtitle1">Plan</Typography>

        <TextField
          label="Repair Date"
          type="date"
          value={repairDate}
          onChange={handleRepairDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Odometer"
          type="number"
          value={odometer}
          onChange={handleOdometerChange}
        />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>

        <Link component="button" variant="body2" onClick={handleCancelClick}>
          Cancel
        </Link>
      </form>
    </div>
  );
}
