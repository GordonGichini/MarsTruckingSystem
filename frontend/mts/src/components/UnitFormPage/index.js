import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { FormControlLabel, Radio, RadioGroup, Typography, TextField, Button, Box, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
  },
  formContainer: {
    padding: theme.spacing(4),
  },
  radioGroup: {
    color: 'green', // Set the color of the radio button to green
    '& .MuiFormControlLabel-label': {
      color: 'green', // Set the color of the label text to green
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
      <Typography variant="h5" className={classes.title}>Add a Unit</Typography>
      <Box className={classes.formContainer}>
      <Box my={2}>
        <Typography variant="subtitle1">Unit Type</Typography>
        <TextField select label="Type" variant="outlined"className={classes.inputField}>
          <MenuItem value="truck">Truck</MenuItem>
          <MenuItem value="trailer">Trailer</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </TextField>

        <Typography variant="subtitle1">Ownership Type</Typography>
        <TextField select label="Ownership Type" variant="outlined"className={classes.inputField}>
          <MenuItem value="companyOwned">Company Owned</MenuItem>
          <MenuItem value="ownerOperator">Owner Operator</MenuItem>
        </TextField>

        <Typography variant="subtitle1">Status</Typography>
        <RadioGroup className={classes.radioGroup} row aria-label="status" name="type" variant="outlined">
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
        </RadioGroup>

        <Button variant="contained" color="primary" onClick={handleOptionalFieldsClick}>
          {showOptionalFields ? 'Hide Optional Fields' : 'Show Optional Fields'}
        </Button>

        {showOptionalFields && (
          <div>
            <TextField label="VIN" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Make" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Model" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Description" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Year" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Year Purchased" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Purchase Price" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="License Plate Number" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="License Plate Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Information Sticker Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <TextField label="Insurance Expiration" variant="outlined" margin='normal' className={classes.inputField} />
          </div>
        )}

        <Typography variant="h5">Initial Location</Typography>
        <TextField label="Initial location" variant="outlined" margin="normal" className={classes.inputField} />
        <Typography variant="body2">
          The initial location of the unit is used to accurately calculate mileage.
        </Typography>
        <Button variant="contained" color="primary">
          Create Initial Location
        </Button>

        <Button variant="outlined" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        </Box>
      </Box>
    </div>
  );
}
