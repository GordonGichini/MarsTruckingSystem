import React from 'react';
import InNavBar from '../../common/Header/InNavBar';
//import Footer from './HomePage/components/Footer';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography, makeStyles, Box, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    proContainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        padding: theme.spacing(2),
        width: '100%',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    trialContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid black',
        height: '150px',
        width: '250px',
        marginBottom: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    subscription: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black',
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        justifyContent: 'space-between',
      },
    
      billing: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black',
        padding: theme.spacing(2),
      },
}));

function Subscription() {
    const classes = useStyles();

    return(
        <div>
        <InNavBar />
            <Box mt={12} ml={2} display="flex">
        <Stack direction="row" spacing={0.8}>
          <Button color="inherit"
            component={Link}
            to="./editpage"
            variant="outlined"
          >Apply Coupon Code 
          </Button>
          <Button color="inherit"
            component={Link}
            to=''
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

      <Box className={classes.proContainer}>
                <Typography variant='h5'>Chakra Logistics Subscription</Typography>
            
                <Typography variant='subtitle1' gutterBottom>Upgrade to Pro</Typography>
                <Typography variant='body1'>
                    While on the trial, you can upgrade to our Pro product any time you want. This lets you experiment with both.

                    Pro gives you access to a new workflow. You are able to plan loads independently of how you dispatch them.
                    This lets you enter loads when you don't have all the information. It also gives you access to LTL trips. 
                    That means the system can track when there are loads from different customers on the same load.
                </Typography> 
                <Button variant="outlined" size="small">Upgrade to Pro</Button>               
            </Box>

            <Grid container spacing={2}>
              <Grid item>        
      <Box className={classes.trialContainer}>
        <Box>
        <Typography variant='subtitle1' gutterBottom>Trial Time remaining</Typography>
        <Typography variant='h4' style={{ fontWeight: 'bold' }}>28 Days</Typography>
      </Box>
      </Box>
      </Grid>

      <Grid item>
        <Box>
      <Typography>Free Trial Detail</Typography>
      <Typography>Start Date: 06/11/2022</Typography>
      <Typography>End Date: 06/12/2022</Typography>
      </Box>

      <Button variant="outlined">Go Pro and pay nothing until 06/12/2022</Button>
</Grid>
</Grid>

<Box ml={2}>
  <Grid item xs={12} md={6}>
    <Box className={classes.subscription} p={2}>
      <Typography variant="h6" gutterBottom>
        Subscription
      </Typography>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>Fleet (8-300 trucks)</td>
          </tr>
          <tr>
            <td>Status:</td>
            <td>On Free Trial</td>
          </tr>
          <tr>
            <td>Billing Frequency:</td>
            <td>Monthly</td>
          </tr>
          <tr>
            <td>Trucks Included:</td>
            <td>300</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </Grid>

  <Grid item xs={12} md={6}>
    <Typography variant="h6">Billing Details</Typography>
    <Box className={classes.billing} p={2}>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fleet (8-300 trucks)</td>
            <td>$75.00</td>
          </tr>
          <tr>
            <td>PC Miller</td>
            <td>$25.00</td>
          </tr>
          <tr>
            <td>SubTotal</td>
            <td>$100.00</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </Grid>
  </Box>      
        </div>
    )
}

export default Subscription;