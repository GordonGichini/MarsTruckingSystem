import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';

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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Maintenance Page
          </Typography>
        </Toolbar>
      </AppBar>

      <Box className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          View plans
        </Button>
        <Button variant="contained" className={classes.button}>
          List Maintenance Vendors
        </Button>
        <Button variant="contained" className={classes.button}>
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
        <Button variant="contained" color="primary">
          Add your Maintenance Log Entry
        </Button>
      </Box>
    </div>

   
  )
}

export default Maintenance