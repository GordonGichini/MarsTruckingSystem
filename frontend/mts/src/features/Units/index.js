import React from 'react';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import { Typography, makeStyles, ButtonGroup, Button, TextField, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroupContainer: {
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
  unitsVideoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

export default function Units() {
  const classes = useStyles();

  return (
    <div>
      <InNavBar />
          <Typography variant="h6" className={classes.title}>
            Units
          </Typography>
      <Box className={classes.buttonGroupContainer}>
        <ButtonGroup variant="contained" aria-label="unit selection buttons">
          <Button className={classes.button}>Add unit</Button>
          <Button className={classes.button}>All</Button>
          <Button className={classes.button}>Active</Button>
          <Button className={classes.button}>Inactive</Button>
        </ButtonGroup>
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

      <Box className={classes.unitsVideoContainer}>
        {/* Add your units container video component here */}
        {/* <UnitsVideo /> */}
      </Box>
      <Footer />
    </div>
  );
}
