import React, { useState } from 'react';
import { Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  radioGroup: {
    color: 'green', // Set the color of the radio button to green
    '& .MuiFormControlLabel-label': {
      color: 'green', // Set the color of the label text to green
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(12),
    marginLeft: theme.spacing(2),
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


export default function MaintenanceLogEntryFormPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();

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
    <div style={{ flex: 1 }}>
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Maintenance Log Entry</Typography>

      <form className={classes.formContainer}>
        <Box className={classes.formContainer}>
          <FormControl className={classes.inputField}>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              value={unit}
              onChange={handleUnitChange}
            >
              <MenuItem value="general">General</MenuItem>
            </Select>
          </FormControl>

        <TextField
          label="Short Description"
          value={shortDescription}
          onChange={handleShortDescriptionChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <TextField
          label="Description"
          multiline
          rows={5}
          value={description}
          onChange={handleDescriptionChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <TextField
          label="Maintenance Vendor"
          value={maintenanceVendor}
          onChange={handleMaintenanceVendorChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <Button variant="outlined" className={classes.button} color="primary" onClick={handleCreateMaintenanceVendorClick}>
          Create Maintenance Vendor
        </Button>

        <TextField
          label="Amount"
          value={amount}
          onChange={handleAmountChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <Typography variant="subtitle1">Plan</Typography>

        <TextField
          label="Repair Date"
          type="date"
          value={repairDate}
          onChange={handleRepairDateChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Odometer"
          type="number"
          value={odometer}
          onChange={handleOdometerChange}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
        />

        <Button variant="outlined" className={classes.button} color="primary" onClick={handleSaveClick}>
          Save
        </Button>

        <Link component="button" variant="body2" onClick={handleCancelClick}>
          Cancel
        </Link>
        </Box>
      </form>
    </div>
  );
}
