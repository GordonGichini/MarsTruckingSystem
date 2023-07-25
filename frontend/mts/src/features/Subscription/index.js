import React from 'react';
import InNavBar from '../../common/Header/InNavBar';
import Footer from './HomePage/components/Footer';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography, makeStyles, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },

    proContainer: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: '1px solid black',
        alignItems: 'center',
        height: '400px',
        width: '100%',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },

    trialContainer: {
        display: 'flex',
        justifyContent: 'center',
        borderStyle: '1px solid black',
        height: '250px',
        width: '250px',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }


}));

function Subscription() {
    const classes = useStyles();

    return(
        <div>
            <InNavBar />
            <Box mt={12} ml={2} display="flex">
        <Stack direction="row" spacing={2}>
          <Button color="inherit"
            component={Link}
            to="./editpage"
            variant="outlined"
          >Apply Coupon Code 
          </Button>
          <Button color="inherit"
            component={Link}
            to='./subscription'
            variant="outlined"
          >Edit Credit Card
          </Button>
          <Button color="inherit"
            component={Link}
            to="./notifications"
            variant="outlined"
          >View Billing Details
          </Button>
          <Button color="inherit"
            component={Link}
            to="./notifications"
            variant="outlined"
          >Subscribe
          </Button>
          <Button color="inherit"
            component={Link}
            to="./notifications"
            variant="outlined"
          >Cancel Account 
          </Button>
          <Button color="inherit"
            component={Link}
            to="./notifications"
            variant="outlined"
          >Add ELD Subscription
          </Button>
        </Stack>
      </Box>

      <Typography variant="h5" className={classes.title}>Chakra Logistics Subscription</Typography>
      <Box className={classes.proContainer}>
        <Typography variant='subtitle1' gutterBottom>Upgrade to Pro</Typography>
        <Typography variant='body1'>
            While on the trial, you can upgrade to our Pro product any time you want. This lets you experiment with both.

            Pro gives you access to a new work flow. You are able to plan loads independent of how you dispatch them.
            This lets you enter loads when you dont have all the information. It also gives you access to LTL trips. 
            That means the system can track when there are loads from different customers on the same load.
        </Typography>
        <Button variant="outlied">Go Pro</Button>
      </Box>

      <Box className={classes.trialContainer}>
        <Typography variant='subtitle1' gutterBottom>Trial Time remaining</Typography>
        <Typography variant='body1'>28 Days</Typography>
      </Box>
      <Typography>Free Trial Detail</Typography>
      <Typography>Start Date  06/11/2022</Typography>
      <Typography>End Date  06/12/2022</Typography>

      <Button variant="outlined">Go Pro and pay nothing until 06/12/2022</Button>

      <Typography variant='h6' gutterBottom>Subscription</Typography>
      <Box className={classes.formContainer}>
        <Grid item xs={12} md={6}>
        <Box className={classes.form} border='1px solid black' p={2}>
          <Typography variant="subtitle1" gutterBottom>Name:</Typography>
          <Typography variant="body1">Fleet (8-300 trucks)</Typography>
          <Typography variant="subtitle1" gutterBottom>Status</Typography>
          <Typography variant="body1">On Free Trial</Typography>
          <Typography variant="subtitle1"gutterBottom>Billing Frequency</Typography>
          <Typography variant="body1">Monthly</Typography>
          <Typography variant="subtitle1"gutterBottom>Trucks Included</Typography>
          <Typography variant="body1">300</Typography>
        </Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Typography variant="h6">Billing Details</Typography>
        <Box className={classes.form} border="1px solid black" p={2}>
          <Typography variant="subtitle1" gutterBottom>Description</Typography>
          <Typography variant="subtitle1" gutterBottom>Amount</Typography>
          <Typography variant="body1">Fleet (8-300 trucks)</Typography>
          <Typography variant="body1" gutterBottom>$75.00</Typography>
          <Typography variant="body1">PC Miller</Typography>
          <Typography variant="body1" gutterBottom>$25.00</Typography>
          <Typography variant="body1" gutterBottom>SubTotal</Typography>
          <Typography variant="body1" gutterBottom>$100.00</Typography>
        </Box>
        </Grid>
        </Box>

        <Footer />
        </div>
    )
}