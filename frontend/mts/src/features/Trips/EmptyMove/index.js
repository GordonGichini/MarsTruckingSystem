import React, { useState } from 'react';
import InNavBar from '../../../common/Header/InNavBar';
import Footer from '../../../pages/HomePage/components/Footer';
import { Button, TextField, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  expenseContainer: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),

  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  sectionSubtitle: {
    marginBottom: theme.spacing(1),
  },
  inputField: {
      width: '98%',
      margin : theme.spacing(1, 0),
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
  }));

export default function EmptyMove() {
  const classes = useStyles();
  const theme = useTheme();
  // State for form fields
  const [customTripNumber, setCustomTripNumber] = React.useState('');
  const [accessoryDriverPay, setAccessoryDriverPay] = React.useState('');
  const [truck, setTruck] = React.useState('');
  const [trailer, setTrailer] = React.useState('');
  const [odometer, setOdometer] = React.useState('');

  const [emptyMoveTitle, setEmptyMoveTitle] = React.useState('');
  const [emptyMoveAddress, setEmptyMoveAddress] = React.useState('');
  const [emptyMoveDate, setEmptyMoveDate] = React.useState('');
  const [instructions, setInstructions] = React.useState('');
  const [notes, setNotes] = React.useState('');

  const handleSave = () => {
    // Handle saving the form data
    // You can access the form field values here and perform further actions
  };

  const handleCancel = () => {
    // Handle cancel action
    // You can reset the form fields or navigate back to the previous page
  };

  return (
    <div>
      <InNavBar />
      <Box className={classes.formContainer}>
      <Typography variant="h6">Basic Details</Typography>
      <Box>
        <TextField
          label="Custom Trip Number"
          value={customTripNumber}
          variant="outlined"
          margin='normal'
          onChange={(e) => setCustomTripNumber(e.target.value)}
          fullWidth
          className={classes.inputField}
        />
        <Button variant="contained" color="primary">
          Create Driver
        </Button>
        <TextField
          label="Accessory Driver Pay"
          value={accessoryDriverPay}
          variant="outlined"
          margin='normal'
          onChange={(e) => setAccessoryDriverPay(e.target.value)}
          fullWidth
          className={classes.inputField}
        />
        <Button variant="contained" color="primary">
          Add Team Driver
        </Button>
        <TextField
          label="Truck"
          value={truck}
          variant="outlined"
          margin='normal'
          onChange={(e) => setTruck(e.target.value)}
          fullWidth
          className={classes.inputField}
        />
        <Button variant="contained" color="primary">
          Create Truck
        </Button>
        <TextField
          label="Trailer"
          value={trailer}
          variant="outlined"
          margin='normal'
          onChange={(e) => setTrailer(e.target.value)}
          fullWidth
          className={classes.inputField}
        />
        <Button variant="contained" color="primary">
          Create Trailer
        </Button>
        <TextField
          label="Odometer"
          value={odometer}
          variant="outlined"
          margin='normal'
          onChange={(e) => setOdometer(e.target.value)}
          fullWidth
          className={classes.inputField}
        />
      </Box>

      <Typography variant="h6">Empty Move Details</Typography>
      <Box>
        <Typography variant="body1">Current Date: {new Date().toLocaleDateString()}</Typography>
        <TextField
          label="Empty Move Title"
          value={emptyMoveTitle}
          variant="outlined"
          margin='normal'
          onChange={(e) => setEmptyMoveTitle(e.target.value)}
          fullWidth
          className={classes.inputField}
        /> 
        <TextField
          label="Empty Move Address"
          value={emptyMoveAddress}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          onChange={(e) => setEmptyMoveAddress(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Create Empty Move Address
        </Button>
        <TextField
          label="Empty Move Date"
          value={emptyMoveDate}
          variant="outlined"
          margin='normal'
          className={classes.inputField}
          onChange={(e) => setEmptyMoveDate(e.target.value)}
        />
        <TextField
          label="Instructions"
          value={instructions}
          variant="outlined"
          margin='normal'
          onChange={(e) => setInstructions(e.target.value)}
          multiline
          className={classes.inputField}

        />
        <TextField
          label="Notes"
          value={notes}
          variant="outlined"
          margin='normal'
          onChange={(e) => setNotes(e.target.value)}
          multiline
          className={classes.inputField}
        />
      </Box>

      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
      </Box>
    </div>
  );
};
