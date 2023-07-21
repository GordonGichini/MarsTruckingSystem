import React, { useState } from 'react';
import { Typography, TextField, Button, FormControl, Select, MenuItem, InputLabel, Box, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function ExpenseFormPage() {
  const navigate = useNavigate();

  const [expenseCategory, setExpenseCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [assignToTrip, setAssignToTrip] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [unit, setUnit] = useState('');
  const [gallons, setGallons] = useState('');
  const [odometer, setOdometer] = useState('');
  const [fuelVendor, setFuelVendor] = useState('');
  const [stateProvince, setStateProvince] = useState('');

  const handleExpenseCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAssignToTripChange = (event) => {
    setAssignToTrip(event.target.value);
  };

  const handleExpenseDateChange = (event) => {
    setExpenseDate(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleGallonsChange = (event) => {
    setGallons(event.target.value);
  };

  const handleOdometerChange = (event) => {
    setOdometer(event.target.value);
  };

  const handleFuelVendorChange = (event) => {
    setFuelVendor(event.target.value);
  };

  const handleStateProvinceChange = (event) => {
    setStateProvince(event.target.value);
  };

  const handleAddCategoryClick = () => {
    // Perform logic for adding an expense category
    // You can access the captured input values here
  };

  const handleCreateExpenseClick = () => {
    // Perform logic for creating an expense
    // You can access the captured input values here
  };

  const handleCancelClick = () => {
    navigate.push('/expenses');
  };

  return (
    <div>
      <Typography variant="h6">Add Expense</Typography>

      <form>
        <Box my={2}>
          <FormControl>
            <InputLabel id="expense-category-label">Expense Category</InputLabel>
            <Select
              labelId="expense-category-label"
              value={expenseCategory}
              onChange={handleExpenseCategoryChange}
            >
              <MenuItem value="fuel">Fuel</MenuItem>
              <MenuItem value="reeferFuel">Reefer Fuel</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" color="primary" onClick={handleAddCategoryClick}>
            Add Category
          </Button>
        </Box>

        <TextField
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
          margin='normal'
          />

        <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          margin='normal'
          />

        <FormControl>
          <InputLabel id="assign-to-trip-label">Assign to Trip</InputLabel>
          <Select
            labelId="assign-to-trip-label"
            value={assignToTrip}
            onChange={handleAssignToTripChange}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Expense Date"
          type="date"
          value={expenseDate}
          onChange={handleExpenseDateChange}
          variant="outlined"
          margin='normal'
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Unit"
          value={unit}
          onChange={handleUnitChange}
          variant="outlined"
          margin='normal'
        />

        <TextField
          label="Gallons"
          value={gallons}
          onChange={handleGallonsChange}
          variant="outlined"
          margin='normal'
        />

        <TextField
          label="Odometer"
          value={odometer}
          onChange={handleOdometerChange}
          variant="outlined"
          margin='normal'
        />

        <TextField
          label="Fuel Vendor"
          value={fuelVendor}
          onChange={handleFuelVendorChange}
          variant="outlined"
          margin='normal'
        />

        <TextField
          label="State/Province"
          value={stateProvince}
          onChange={handleStateProvinceChange}
          variant="outlined"
          margin='normal'
        />

        <Button variant="contained" color="primary" onClick={handleCreateExpenseClick}>
          Create Expense
        </Button>

        <Link component="button" variant="body2" onClick={handleCancelClick}>
          Cancel
        </Link>
      </form>
    </div>
  );
}
