import React from 'react';
import { Typography, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  formTitle: {
    marginBottom: theme.spacing(2),
  },
  formInput: {
    marginBottom: theme.spacing(2),
  },
  formButton: {
    marginTop: theme.spacing(2),
  },
}));

function NewCalendarPlan() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" className={classes.formTitle}>
        New Calendar Plan
      </Typography>

      <div className={classes.formContainer}>
        <TextField label="Title" fullWidth className={classes.formInput} />
        <TextField label="Description" fullWidth className={classes.formInput} />
        <TextField label="Start Date" type="date" fullWidth className={classes.formInput} />
        <TextField label="End Date" type="date" fullWidth className={classes.formInput} />
        <TextField label="Interval" type="number" fullWidth className={classes.formInput} />
        <TextField label="Interval Period" select fullWidth className={classes.formInput}>
          {/* Add options for interval periods */}
        </TextField>

        {/* Add the "Select All" and "De-select All" buttons */} 
        <Button variant="contained" className={classes.button}>
          Select All
        </Button>
        <Button variant="contained" className={classes.button}>
          De-select All
        </Button>

        <Button variant="contained" className={classes.button}>
          save
        </Button>
        <Button variant="contained" className={classes.button}>
          cancel
        </Button>
      </div>
    </div>
  );
}

export default NewCalendarPlan;