import React, { useState } from 'react';
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
  invoiceTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

function Invoices() {
    const classes = useStyles();
    const [allLoadsInvoiced, setAllLoadsInvoiced] = useState(true);

    const handleAddInvoiceClick = () => {
      if (allLoadsInvoiced) {
        // Set an error state or show a message
        console.log('You cannot add an invoice: all loads are invoiced');
      } else {
        //lets proceed with the logic for adding a invoice
      }
    }


  return (
    <div>
        <Typography variant="h6" className={classes.title}>
          Invoice Page
        </Typography>

    <Box className={classes.buttonContainer}>
      <Button variant="contained" className={classes.button}>
        Add Invoice
      </Button>
      <Button variant="contained" className={classes.button}>
        Unpaid
      </Button>
      <Button variant="contained" className={classes.button}>
        Unpaid Over 30days
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

    <Box className={classes.invoiceTitleContainer}>
      <Typography variant="h4">Invoice</Typography>
    </Box>
  </div>
);
}


export default Invoices