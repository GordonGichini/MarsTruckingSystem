import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  planContainer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
  },
  planTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function MaintenancePlans() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Maintenance Plans
          </Typography>
        </Toolbar>
      </AppBar>

      <Box className={classes.buttonContainer}>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="/maintenance-logs">
          View Log
        </Button>
        <Button variant="contained" 
        className={classes.button}
        component={Link}
        to="/new-calendar-plan">
          New Calendar Plan
        </Button>
        <Button variant="contained" 
        className={classes.button}
        component={Link}
        to="/new-mile-plan">
          New Mile Plan
        </Button>
      </Box>

      <div className={classes.planContainer}>
        <Typography variant="h6" className={classes.planTitle}>
          Maintenance Plans List
          <p> Welcome to Maintenance Plans, Once you have added some plans they will appear here</p>
        </Typography>
        {/* Render the list of maintenance plans here */}
        {/* Each plan should have relevant information */}
      </div>

      <Box className={classes.buttonContainer}>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="./new-calendar-plan">
          New Calendar Plan
        </Button>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="./new-mile-plan">
          New Mile Plan
        </Button>
      </Box>
    </div>
  );
}

export default MaintenancePlans;
