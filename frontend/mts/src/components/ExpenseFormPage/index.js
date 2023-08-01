import React, { useState } from 'react';
import { Typography, Radio, Grid, RadioGroup, TextField, Button, FormControl, Select, MenuItem, InputLabel, Box, Link, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },
  radioGroup: {
    color: 'green', // Set the color of the radio button to green
    '& .MuiFormControlLabel-label': {
      color: 'green', // Set the color of the label text to green
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(12),
    marginRight: theme.spacing(6),
  },
  noteContainer: {
    display: 'flex',
    borderStyle: '1px solid green',
    height: '120px',
    width: '100%',
    padding: theme.spacing(0),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '& .MuiButton-outlined': {
        borderColor: '#00C853', // Green color for button lines
        color: '#00C853', // Green color for button text
      },
      '& .MuiButton-outlined:hover': {
        backgroundColor: '#00C853', // Green color when hovered
        color: '#FFFFFF', // White text color when hovered
      },
  },
  inputField: {
    width: '60%',
    margin: theme.spacing(1, 0),
    '& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderColor: 'green',
  },
  '&:hover fieldset': {
    borderColor: 'green',
  },
  '&.Mui-focused fieldset': {
    borderColor: 'green',
  },
 },
  },

}));

export default function ExpenseFormPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

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
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Add Expense</Typography>

      <Box className={classes.formContainer}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
        <Box my={2}>
          <FormControl className={classes.inputField}>
            <InputLabel id="expense-category-label" variant="outlined">Expense Category</InputLabel>
            <Select
              labelId="expense-category-label"
              value={expenseCategory}
              onChange={handleExpenseCategoryChange}
            >
              <MenuItem value="fuel">Fuel</MenuItem>
              <MenuItem value="reeferFuel">Reefer Fuel</MenuItem>
            </Select>
          </FormControl>

          <Button variant="outlined" color="primary" className={classes.button} onClick={handleAddCategoryClick}>
            Add Category
          </Button>
        </Box>

        <TextField
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          />

        <TextField
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          />

          <Typography variant="subtitle1">Assign to Trip</Typography>
          <RadioGroup className={classes.radioGroup} aria-label="assign to trip" name="type" variant="outlined">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />

          </RadioGroup>

        <TextField
          label="Expense Date"
          type="date"
          value={expenseDate}
          onChange={handleExpenseDateChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box className={classes.noteContainer}>
        <TextField
        label="Notes"
        variant="outlined"
        multiline
        fullWidth />
        </Box>

        </Grid>
        <Grid item xs={6}>

        <TextField
          label="Unit"
          value={unit}
          onChange={handleUnitChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <TextField
          label="Gallons"
          value={gallons}
          onChange={handleGallonsChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <TextField
          label="Odometer"
          value={odometer}
          onChange={handleOdometerChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <TextField
          label="Fuel Vendor"
          value={fuelVendor}
          onChange={handleFuelVendorChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />
         <Button variant="outlined" className={classes.button} color="primary" onClick={handleAddCategoryClick}>
            Add Fuel Vendor
          </Button>

        <TextField
          label="State/Province"
          value={stateProvince}
          onChange={handleStateProvinceChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <Button variant="outlined" color="primary" className={classes.button} onClick={handleCreateExpenseClick}>
          Create Expense
        </Button>

        <Link component="button" variant="body2" onClick={handleCancelClick}>
          Cancel
        </Link>
        </Grid>
        </Grid>
      </Box>
    </div>
  );
}
