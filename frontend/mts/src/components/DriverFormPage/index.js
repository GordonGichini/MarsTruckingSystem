import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InNavBar from '../../common/Header/InNavBar';
import { Paper, TextField, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
 
  formContainer: {
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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

export default function DriverFormPage() {
  const [showEmergencyContact, setShowEmergencyContact] = useState(false);

  const handleEmergencyContactClick = () => {
    setShowEmergencyContact(!showEmergencyContact);
  };

  const handleSaveClick = () => {
    // Logic for saving driver details
  };
  const classes = useStyles();

  return (
    <div>
      <InNavBar />
        <Paper elevation={1} className={classes.formContainer}>
      <Typography variant="h6" className={classes.title}>Add Driver</Typography>
      <form className={classes.formContainer}>

      <Box my={2}>
        <TextField label="First Name" variant="outlined" margin='normal'className={classes.inputField}/>
        <TextField label="Last Name" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Street" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="City" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="State/Province" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="ZIP Code" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Phone" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Alternate Phone" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Fax" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Email" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Default Payment Type" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="License Number" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="License Expiration" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="License Issuing State/Jurisdiction" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Medical Card Renewal" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Hire Date" variant="outlined" margin='normal'className={classes.inputField} />
        <TextField label="Termination Date" variant="outlined" margin='normal'className={classes.inputField} />

        <Button variant="contained" color="primary" onClick={handleEmergencyContactClick}>
          {showEmergencyContact ? 'Hide Emergency Contact' : 'Show Emergency Contact'}
        </Button>

        {showEmergencyContact && (
          <div>
            <TextField label="Contact Name" variant="outlined" margin='normal'className={classes.inputField} />
            <TextField label="Contact Phone" variant="outlined" margin='normal'className={classes.inputField} />
            <TextField label="Contact Street" variant="outlined" margin='normal'className={classes.inputField} />
            <TextField label="Contact City" variant="outlined" margin='normal'className={classes.inputField} />
            <TextField label="Contact State" variant="outlined" margin='normal'className={classes.inputField} />
            <TextField label="Contact ZIP Code" variant="outlined" margin='normal'className={classes.inputField} />
          </div>
        )}

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Box>
      </form>
      </Paper>
    </div>
  );
}
