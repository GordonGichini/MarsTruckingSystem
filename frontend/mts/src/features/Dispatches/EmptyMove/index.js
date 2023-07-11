import React from 'react';
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
      <Typography variant="h6">Basic Details</Typography>
      <Box>
        <TextField
          label="Custom Trip Number"
          value={customTripNumber}
          onChange={(e) => setCustomTripNumber(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Driver
        </Button>
        <TextField
          label="Accessory Driver Pay"
          value={accessoryDriverPay}
          onChange={(e) => setAccessoryDriverPay(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Add Team Driver
        </Button>
        <TextField
          label="Truck"
          value={truck}
          onChange={(e) => setTruck(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Truck
        </Button>
        <TextField
          label="Trailer"
          value={trailer}
          onChange={(e) => setTrailer(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Trailer
        </Button>
        <TextField
          label="Odometer"
          value={odometer}
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
          onChange={(e) => setEmptyMoveTitle(e.target.value)}
          fullWidth
        /> 
        <TextField
          label="Empty Move Address"
          value={emptyMoveAddress}
          onChange={(e) => setEmptyMoveAddress(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary">
          Create Empty Move Address
        </Button>
        <TextField
          label="Empty Move Date"
          value={emptyMoveDate}
          onChange={(e) => setEmptyMoveDate(e.target.value)}
          fullWidth
        />
        <TextField
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          multiline
          fullWidth
        />
        <TextField
          label="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          multiline
          fullWidth
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
