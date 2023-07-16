import React from 'react';
import { Link } from 'react-router-dom';
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
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  searchInput: {
    width: '400px',
  },
  maintenanceVideoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  addMaintenanceButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

function Maintenance() {
    const classes = useStyles();

  return (
    <div>
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

      <Box className={classes.searchContainer}>
        <TextField
          className={classes.searchInput}
          variant="outlined"
          placeholder="Search..."
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Box className={classes.maintenanceVideoContainer}>
        {/* Add your maintenance video component here */}
        {/* <MaintenanceVideo /> */}
      </Box>

      <Box className={classes.addMaintenanceButton}>
        <Button variant="contained" 
        color="primary"
        component={Link}
        to="/add-log-entry">
          Add your Maintenance Log Entry
        </Button>
      </Box>
    </div>

   
  )
}

export default Maintenance