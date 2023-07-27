import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Typography, TextField, Button, Box, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: theme.spacing(1),
    padding: theme.spacing(2),

  },
}));


export default function UnitFormPage() {
  const theme = useTheme();
  const classes = useStyles();
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleOptionalFieldsClick = () => {
    setShowOptionalFields(!showOptionalFields);
  };

  const handleSaveClick = () => {
    // Logic for saving unit details
  };

  return (
    <div>
      <Typography variant="h6">Add a Unit</Typography>

      <Box my={2}>
        <Typography variant="subtitle1">Unit Type</Typography>
        <TextField select label="Type" variant="outlined" className={classes.input}>
          <MenuItem value="truck">Truck</MenuItem>
          <MenuItem value="trailer">Trailer</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </TextField>

        <Typography variant="subtitle1">Ownership Type</Typography>
        <TextField select label="Ownership Type" variant="outlined" className={classes.input}>
          <MenuItem value="companyOwned">Company Owned</MenuItem>
          <MenuItem value="ownerOperator">Owner Operator</MenuItem>
        </TextField>

        <Typography variant="subtitle1">Status</Typography>
        <TextField select label="Status" variant="outlined" className={classes.input}>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>

        <Button variant="contained" color="primary" onClick={handleOptionalFieldsClick}>
          {showOptionalFields ? 'Hide Optional Fields' : 'Show Optional Fields'}
        </Button>

        {showOptionalFields && (
          <div>
            <TextField label="VIN" variant="outlined" margin='normal' />
            <TextField label="Make" variant="outlined" margin='normal' />
            <TextField label="Model" variant="outlined" margin='normal' />
            <TextField label="Description" variant="outlined" margin='normal' />
            <TextField label="Year" variant="outlined" margin='normal' />
            <TextField label="Year Purchased" variant="outlined" margin='normal' />
            <TextField label="Purchase Price" variant="outlined" margin='normal' />
            <TextField label="License Plate Number" variant="outlined" margin='normal' />
            <TextField label="License Plate Expiration" variant="outlined" margin='normal' />
            <TextField label="Information Sticker Expiration" variant="outlined" margin='normal' />
            <TextField label="Insurance Expiration" variant="outlined" margin='normal' />
          </div>
        )}

        <Typography variant="subtitle2">Initial Location</Typography>
        <Typography variant="body2">
          The initial location of the unit is used to accurately calculate mileage.
        </Typography>
        <Button variant="contained" color="primary">
          Create Initial Location
        </Button>

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
