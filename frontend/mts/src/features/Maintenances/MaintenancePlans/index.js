import React from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../../common/Header/InNavBar';
import Footer from '../../../pages/HomePage/components/Footer';
import { Typography, Button, makeStyles, Box } from '@material-ui/core';

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
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(2),
  },
  btnContainer: {
    display: 'flex',
    marginBottom: theme.spacing(6)

  },
  button: {
    margin: theme.spacing(1),
  },
  planContainer: {
    display: 'flex',
    height: '250px',
    width: '95%',
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(2),
    flexDirection: 'column',
    padding: theme.spacing(2),
    border: '1px solid black',
    borderRadius: theme.spacing(2),
  },
  planTitle: {
    marginBottom: theme.spacing(2),
  },
}));

function MaintenancePlans() {
  const classes = useStyles();

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Maintenance Plans
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="/maintenance_logs">
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

      <Box className={classes.planContainer}>
        <Typography variant="h6" className={classes.planTitle}>
          Maintenance Plans List
          <p> Welcome to Maintenance Plans, Once you have added some plans they will appear here</p>
          <p>You can add Calendar plans and Mileage plans  </p>
        </Typography>
        {/* Render the list of maintenance plans here */}
        {/* Each plan should have relevant information */}
      <Box className={classes.btnContainer}>
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
      </Box>
    </div>
  );
}

export default MaintenancePlans;
