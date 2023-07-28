import React from 'react';
import { Link } from 'react-router-dom';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import { Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';
import EmptyMove from './EmptyMove';
import { Color } from '@material-ui/core';
import DetailedList from  './DetailedList';


export {
  DetailedList,
  EmptyMove,
}


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  text: {
    flexGrow: 1,
    marginBottom: theme.spacing(24),
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  date: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),

  },
  tripContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '450px',
    width: '95%',
    border: '1px solid black',
    borderRadius: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
 //  minHeight: '100vh',
  },
  videoContainer: {
    display: 'flex',
    height: '350px',
    width: '60%',
    border: '1px solid green',
    marginTop: theme.spacing(-23),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),

  },
  addDispatchButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));


function Trips() {
  const classes = useStyles();

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
   
    <Box className={classes.buttonContainer}>
      <Button variant="outlined" className={classes.button} component={Link} to="/DetailedList">
        Detailed List
      </Button>
      <Button
       variant="outlined"
       className={classes.button}
       component={Link}
       to="/add-dispatch"
       >
        Add Dispatch
      </Button>
      <Button 
      variant="outlined" 
      className={classes.button}
      component={Link}
      to="/empty-move">
        Add Empty Move
      </Button>
      <Button variant="outlined" className={classes.button}>
        Driver Locations
      </Button>
    </Box>
    <Typography variant="h7" className={classes.date}>Showing Trips from 06/15/2022 to 09/15/2023.<Button variant="text" color="inherit">Change Dates</Button>
    </Typography>
    <Box className={classes.tripContainer}>
      <Typography variant="h5" className={classes.title}>Welcome to Dispatches!</Typography>
      <Typography variant="h6" className={classes.text}>Here is a brief video to explain how Dispatches work.</Typography>
      <Box className={classes.videoContainer}>Video</Box>
      {/* Add your welcome video component here */}
      {/* <WelcomeVideo /> */}
      <Box className={classes.addDispatchButton}>
      <Button variant="contained"
      color="primary"
      component={Link}
      to="/add-dispatch">
        Add Dispatch
      </Button>
    </Box>
    </Box>
  </div>
  )
}

export default Trips