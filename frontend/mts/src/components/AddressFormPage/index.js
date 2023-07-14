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
        <TextField label="Search" variant=""  />

        <TextField label="Company Name" variant="outlined" />
        <TextField label="Street" variant="outlined" />
        <TextField label="Apt/Suite/Other" variant="outlined" />
        <TextField label="City" variant="outlined" />
        <TextField label="State/Province" variant="outlined" />
        <TextField label="ZIP Code" variant="outlined" />
        <TextField label="Phone Number" variant="outlined" />
        <TextField label="Phone Extension Number" variant="outlined" />
        <TextField label="Alternate Phone" variant="outlined" />
        <TextField label="Alternate Phone Extension" variant="outlined" />
        <TextField label="Number" variant="outlined" />
        <TextField label="Fax" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Website" variant="outlined" />
        <TextField label="Contact" variant="outlined" />
        <TextField label="Notes" variant="outlined" />
        <TextField label="Motor Carrier Number" variant="outlined" />
        <TextField label="Tax ID (EIN#)" variant="outlined" />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
      </Box>
    </div>
  );
}
