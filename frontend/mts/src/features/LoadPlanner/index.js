import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../common/Header/InNavBar';
import { Typography, makeStyles, Button, Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { createPlannedLoadAsync, selectPlannedLoads } from '../../redux/slices/plannedLoadsSlice';


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

function LoadPlanner() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const plannedLoads = useSelector(selectPlannedLoads);

    const [hasPlannedLoads, setHasPlannedLoads] = useState(false);

    useEffect(() => {
      // Check if there are planned loads to determine whether to display the table
      if (plannedLoads.length > 0) {
        setHasPlannedLoads(true);
      } else {
        setHasPlannedLoads(false);
      }
    }, [plannedLoads]);

    const handleCreatePlannedLoad = (values) => {
      // Dispatch the action to create a planned load using Redux toolkit
      dispatch(createPlannedLoadAsync(values))
      .then(() => {
        alert('Planned load created successfully!');
      })
      .catch((error) => {
        alert('Error creating planned load.Please try again.');
      });
    };

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Planned Loads
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="outlined"
         className={classes.button}
         component={Link}
         to="/loads">
          Loads List
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
      {hasPlannedLoads ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Load Number</TableCell>
                <TableCell>Customer</TableCell>
                {/* Add more table headers as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {plannedLoads.map((plannedLoad) => (
                <TableRow key={plannedLoad.id}>
                  <TableCell>{plannedLoad.customLoadNumber}</TableCell>
                  <TableCell>{plannedLoad.customer}</TableCell>
                  {/* Add more table cells based on your planned load data */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
      <Box className={classes.maintenanceVideoContainer}>
        <Typography variant="h6">
          Next Step: Add Your First Planned Load
        <p>All loads start out as planned loads in the Load Planner</p>
         <p>Once you have everything entered, you can add a trip and invoice the customer.</p>

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
      )}
    </div>   
  );
}

export default LoadPlanner;