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

function NewMilePlan() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6" className={classes.formTitle}>
        New Mile Plan
      </Typography>

      <div className={classes.formContainer}>
        <TextField label="Title" fullWidth className={classes.formInput} />
        <TextField label="Description" fullWidth className={classes.formInput} />
        <TextField label="Mileage Interval" type="number" fullWidth className={classes.formInput} />
        <TextField label="Units" fullWidth className={classes.formInput} />

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

export default NewMilePlan;

