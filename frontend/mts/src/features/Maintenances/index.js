import React from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import NewCalendarPlan from  './NewCalendarPlan';
import NewMilePlan from './NewMilePlan';
import MaintenancePlans from './MaintenancePlans';
import { Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';


export {
  NewCalendarPlan,
  NewMilePlan,
  MaintenancePlans,
}

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

function Maintenance() {
    const classes = useStyles();

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Maintenance Page
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="/maintenance-plans">
          View plans
        </Button>
        <Button variant="contained"
         className={classes.button}
         component={Link}
         to="./addresses/vendors">
          List Maintenance Vendors
        </Button>
        <Button variant="contained" 
        className={classes.button}
        component={Link}
        to="./add-log-entry">
          Add Log Entry
        </Button>
      </Box>
      <Box className={classes.maintenanceVideoContainer}>
        <Typography variant="h6">
          Welcome to Maintenance!
        <p> Once you have some Maintenance Plans they will show up here.</p>
         <p>Click Here to Add your Maintenance Log Entry</p>

        </Typography>
        {/* Add your maintenance video component here */}
        {/* <MaintenanceVideo /> */}
      <Box className={classes.addMaintenanceButton}>
        <Button variant="contained" 
        color="primary"
        component={Link}
        to="/add-log-entry">
          Add your Maintenance Log Entry
        </Button>
      </Box>
      </Box>
    </div>

   
  )
}

export default Maintenance