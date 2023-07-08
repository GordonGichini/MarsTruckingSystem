import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';

export default function DriverFormPage() {
  const [showEmergencyContact, setShowEmergencyContact] = useState(false);

  const handleEmergencyContactClick = () => {
    setShowEmergencyContact(!showEmergencyContact);
  };

  const handleSaveClick = () => {
    // Logic for saving driver details
  };

  return (
    <div>
      <Typography variant="h6">Add Driver</Typography>

      <Box my={2}>
        <TextField label="First Name" />
        <TextField label="Last Name" />
        <TextField label="Street" />
        <TextField label="City" />
        <TextField label="State/Province" />
        <TextField label="ZIP Code" />
        <TextField label="Phone" />
        <TextField label="Alternate Phone" />
        <TextField label="Fax" />
        <TextField label="Email" />
        <TextField label="Default Payment Type" />
        <TextField label="License Number" />
        <TextField label="License Expiration" />
        <TextField label="License Issuing State/Jurisdiction" />
        <TextField label="Medical Card Renewal" />
        <TextField label="Hire Date" />
        <TextField label="Termination Date" />

        <Button variant="contained" color="primary" onClick={handleEmergencyContactClick}>
          {showEmergencyContact ? 'Hide Emergency Contact' : 'Show Emergency Contact'}
        </Button>

        {showEmergencyContact && (
          <div>
            <TextField label="Contact Name" />
            <TextField label="Contact Phone" />
            <TextField label="Contact Street" />
            <TextField label="Contact City" />
            <TextField label="Contact State" />
            <TextField label="Contact ZIP Code" />
          </div>
        )}

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Box>
    </div>
  );
}
