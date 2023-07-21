import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, TextField, Typography, Button, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
  },
  formTitle: {
    marginBottom: theme.spacing(2),
  },
  formInputs: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(0.1),
    },
  }
})
);

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
      <Container maxWidth="xs" className={classes.root}>
        <Paper elevation={1} className={classes.formContainer}>
      <Typography variant="h6">Add Driver</Typography>
      <form className={classes.formInputs}>

      <Box my={2}>
        <TextField label="First Name" variant="outlined" margin='normal'/>
        <TextField label="Last Name" variant="outlined" margin='normal' />
        <TextField label="Street" variant="outlined" margin='normal' />
        <TextField label="City" variant="outlined" margin='normal' />
        <TextField label="State/Province" variant="outlined" margin='normal' />
        <TextField label="ZIP Code" variant="outlined" margin='normal' />
        <TextField label="Phone" variant="outlined" margin='normal' />
        <TextField label="Alternate Phone" variant="outlined" margin='normal' />
        <TextField label="Fax" variant="outlined" margin='normal' />
        <TextField label="Email" margin='normal' variant="outlined" />
        <TextField label="Default Payment Type" variant="outlined" margin='normal' />
        <TextField label="License Number" variant="outlined" margin='normal' />
        <TextField label="License Expiration" variant="outlined" margin='normal' />
        <TextField label="License Issuing State/Jurisdiction" variant="outlined" margin='normal' />
        <TextField label="Medical Card Renewal" variant="outlined" margin='normal' />
        <TextField label="Hire Date" variant="outlined" margin='normal' />
        <TextField label="Termination Date" variant="outlined" margin='normal' />

        <Button variant="contained" color="primary" onClick={handleEmergencyContactClick}>
          {showEmergencyContact ? 'Hide Emergency Contact' : 'Show Emergency Contact'}
        </Button>

        {showEmergencyContact && (
          <div>
            <TextField label="Contact Name" variant="outlined" margin='normal' />
            <TextField label="Contact Phone" variant="outlined" margin='normal' />
            <TextField label="Contact Street" variant="outlined" margin='normal' />
            <TextField label="Contact City" variant="outlined" margin='normal' />
            <TextField label="Contact State" variant="outlined" margin='normal' />
            <TextField label="Contact ZIP Code" variant="outlined" margin='normal' />
          </div>
        )}

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Box>
      </form>
      </Paper>
      </Container>
    </div>
  );
}
