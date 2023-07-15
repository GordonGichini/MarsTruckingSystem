import React from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';
import EmptyMove from './EmptyMove';
import DetailedList from  './DetailedList';
//import InNavBar from '../common/Header';

export {
  DetailedList,
  EmptyMove,
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
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  addDispatchButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));


function Trips() {
  const classes = useStyles();

  return (
    <div>
   
    <Box className={classes.buttonContainer}>
     <Typography variant="h6" className={classes.title}>
          Dispatch Page
        </Typography> 
      <Button variant="contained" className={classes.button} component={Link} to="/DetailedList">
        Detailed List
      </Button>
      <Button
       variant="contained"
       color="primary"
       component={Link}
       to="/add-dispatch"
       >
        Add Dispatch
      </Button>
      <Button 
      variant="contained" 
      className={classes.button}
      component={Link}
      to="/empty-move">
        Add Empty Move
      </Button>
      <Button variant="contained" className={classes.button}>
        Driver Locations
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

    <Box className={classes.videoContainer}>
      {/* Add your welcome video component here */}
      {/* <WelcomeVideo /> */}
    </Box>

    <Box className={classes.addDispatchButton}>
      <Button variant="contained"
      color="primary"
      component={Link}
      to="/add-dispatch">
        Add Dispatch
      </Button>
    </Box>
  </div>
  )
}

export default Trips