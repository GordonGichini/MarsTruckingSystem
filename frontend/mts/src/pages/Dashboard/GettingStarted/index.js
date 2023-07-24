import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import './styles.css';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: '100%',
    overflow: 'auto',
  },
}));

const GettingStarted = () => {
  const classes = useStyles();
  return (    
    <Box>
      <Paper className={classes.paper}>
      <Box mt={4} p={2} sx={{width:"600px", m:"20px", }}>
    <Typography>Getting Started</Typography>
    <Stack direction="column" spacing={1} >

    <Button variant="outlined" startIcon={<LocalShippingIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-unit"
      >
      <Typography sx={{ml:"30px"}}> Complete Your Company Profile</Typography>
      </Button>
      
      <Button variant="outlined" startIcon={<LocalShippingIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-unit"
      >
      <Typography sx={{ml:"30px"}}> Add Your First truck</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-driver"
      >
      <Typography sx={{ml:"30px"}}> Add Your First driver</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/invoice/customer"
      >
      <Typography sx={{ml:"30px"}}>  Add Your First Customer</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-address"
      >
      <Typography sx={{ml:"30px"}}>  Add Your First Shipper</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-address"
      >
      <Typography sx={{ml:"30px"}}>  Add Your First Consignee</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/add-dispatch"
      >
      <Typography sx={{ml:"30px"}}>  Add Your First Trip</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
       color = "primary"
       component = {Link}
       to = "/invoices"
      >
      <Typography sx={{ml:"30px"}}>  Add Your First invoice</Typography>
      </Button>
      
      
    </Stack>
   </Box>
   </Paper>
   </Box>
  )
}

export default GettingStarted