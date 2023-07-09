import React from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';

export default function AddressFormPage() {
  const handleSaveClick = () => {
    // Logic for saving address details
  };

  return (
    <div>
      <Typography variant="h6">Add Address</Typography>

      <Box my={2}>
        <TextField label="Search" />

        <TextField label="Company Name" />
        <TextField label="Street" />
        <TextField label="Apt/Suite/Other" />
        <TextField label="City" />
        <TextField label="State/Province" />
        <TextField label="ZIP Code" />
        <TextField label="Phone Number" />
        <TextField label="Phone Extension Number" />
        <TextField label="Alternate Phone" />
        <TextField label="Alternate Phone Extension" />
        <TextField label="Number" />
        <TextField label="Fax" />
        <TextField label="Email" />
        <TextField label="Website" />
        <TextField label="Contact" />
        <TextField label="Notes" />
        <TextField label="Motor Carrier Number" />
        <TextField label="Tax ID (EIN#)" />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </Box>
    </div>
  );
}
