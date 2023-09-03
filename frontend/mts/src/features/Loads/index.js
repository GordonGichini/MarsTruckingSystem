import React from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../common/Header/InNavBar';
import { Typography, makeStyles, Button, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    marginTop: theme.spacing(6),
    marginLeft: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  maintenanceVideoContainer: {
    display: 'flex',
    height: '250px',
    width: '95%',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    flexDirection: 'column',
    padding: theme.spacing(2),
    border: '1px solid black',
    borderRadius: theme.spacing(2),
  },
  addMaintenanceButton: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));

function Loads() {
    const classes = useStyles();

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Loads
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="outlined"
         className={classes.button}
         component={Link}
         to="/loadplanner">
          Planned Loads
        </Button>
        <Button variant="outlined"
         className={classes.button}
         component={Link}
         to="/add-planned-load">
          Add Planned Load
        </Button>
        <Button variant="outlined" 
        className={classes.button}
        component={Link}
        to="/add-trip">
          Add Trip
        </Button>
      </Box>
      <Box className={classes.maintenanceVideoContainer}>
        <Typography variant="h6">
          Next Step: Add Your First Planned Load
        <p> All loads start out as planned loads in the Load Planner</p>
         <p>Once you have everything, you can add a trip and invoice the customer</p>

        </Typography>
        {/* Add your maintenance video component here */}
        {/* <MaintenanceVideo /> */}
      <Box className={classes.addMaintenanceButton}>
        <Button variant="outlined" 
        color="primary"
        component={Link}
        to="/add-planned-load">
          Add your First Planned Load
        </Button>
      </Box>
      </Box>
    </div>

   
  )
}

export default Loads