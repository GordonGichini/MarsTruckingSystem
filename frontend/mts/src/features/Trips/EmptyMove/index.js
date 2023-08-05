import React, { useState } from 'react';
import InNavBar from '../../../common/Header/InNavBar';
import Footer from '../../../pages/HomePage/components/Footer';
import { Button, TextField, Box, Typography } from '@material-ui/core';

export default function EmptyMove() {
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
      <Typography variant="h6">Basic Details</Typography>
      <Box>
        <TextField
          label="Custom Trip Number"
          value={customTripNumber}
          variant="outlined"
          onChange={(e) => setCustomTripNumber(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Driver
        </Button>
        <TextField
          label="Accessory Driver Pay"
          value={accessoryDriverPay}
          variant="outlined"
          onChange={(e) => setAccessoryDriverPay(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Add Team Driver
        </Button>
        <TextField
          label="Truck"
          value={truck}
          variant="outlined"
          onChange={(e) => setTruck(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Truck
        </Button>
        <TextField
          label="Trailer"
          value={trailer}
          variant="outlined"
          onChange={(e) => setTrailer(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Trailer
        </Button>
        <TextField
          label="Odometer"
          value={odometer}
          variant="outlined"
          onChange={(e) => setOdometer(e.target.value)}
          fullWidth
        />
      </Box>

      <Typography variant="h6">Empty Move Details</Typography>
      <Box>
        <Typography variant="body1">Current Date: {new Date().toLocaleDateString()}</Typography>
        <TextField
          label="Empty Move Title"
          value={emptyMoveTitle}
          variant="outlined"
          onChange={(e) => setEmptyMoveTitle(e.target.value)}
          fullWidth
        /> 
        <TextField
          label="Empty Move Address"
          value={emptyMoveAddress}
          variant="outlined"
          onChange={(e) => setEmptyMoveAddress(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Create Empty Move Address
        </Button>
        <TextField
          label="Empty Move Date"
          value={emptyMoveDate}
          variant="outlined"
          onChange={(e) => setEmptyMoveDate(e.target.value)}
        />
        <TextField
          label="Instructions"
          value={instructions}
          variant="outlined"
          onChange={(e) => setInstructions(e.target.value)}
          multiline

        />
        <TextField
          label="Notes"
          value={notes}
          variant="outlined"
          onChange={(e) => setNotes(e.target.value)}
          multiline
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
    </div>
  );
};
