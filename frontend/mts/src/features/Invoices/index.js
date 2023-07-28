import React, { useState } from 'react';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import { Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';

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
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
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
    <div style={{ flex: 1 }}>
      <InNavBar />
        <Typography variant="h6" className={classes.title}>
          Invoice Page
        </Typography>

    <Box className={classes.buttonContainer}>
      <Button variant="outlined" className={classes.button}>
        Add Invoice
      </Button>
      <Button variant="outlined" className={classes.button}>
        Unpaid
      </Button>
      <Button variant="outlined" className={classes.button}>
        Unpaid Over 30days
      </Button>
    </Box>

    <Box className={classes.invoiceTitleContainer}>
      <Typography variant="h4">Invoice</Typography>
    </Box>
  </div>
);
}


export default Invoices