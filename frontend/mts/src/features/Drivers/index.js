import React from 'react';
import { Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';

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
}));

export default function Drivers() {
  const classes = useStyles();

  return (
    <div>
          <Typography variant="h6" className={classes.title}>
            Drivers
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          Add Driver
        </Button>
        <Button variant="contained" className={classes.button}>
          Print
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
        {/* Add your All drivers video component here */}
        {/* <AllDriversVideo /> */}
      </Box>
    </div>
  );
}
