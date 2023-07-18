import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';


const MiddleNavBar = () => { 
  const [showForm, setShowForm] = useState(false);
  const [streetFrom, setStreetFrom] = useState('');
  const [cityFrom, setCityFrom] = useState('');
  const [stateFrom, setStateFrom] = useState('');
  const [streetTo, setStreetTo] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [stateTo, setStateTo] = useState('');

  const handleGetMilesClick = () => {
    setShowForm(true);
  }; 

  const handleFormSubmit = () => {
    // Perform the necessary logic for retrieving miles
    // You can access the form values using the state variables
    // streetFrom, cityFrom, stateFrom, streetTo, cityTo, stateTo

    // Once the miles are retrieved, you can close the form
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };
  
  return (
    <Box mt={4} ml={1} display="flex">
  <Stack direction="row" spacing={0.5}>
      <Button variant="outlined"  startIcon={<AddTaskOutlinedIcon />} component ={Link} to="/add-dispatch" > 
      <Typography className='icon_btn'> Add Dispatch</Typography> 
      </Button>
      <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />} component ={Link} to="/add-expense" >
        Add Expenses
      </Button>
      <Button variant="outlined" startIcon={<DescriptionOutlinedIcon />} component ={Link} to="/invoices" >
        Add Invoice
      </Button>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />} component ={Link} to="/add-log-entry" >
        Add Maintenance
      </Button>
      <div>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />} color="primary" onClick={handleGetMilesClick} >
        Get Miles
      </Button> 

      <Dialog open={showForm} onClose={handleFormCancel}>
        <DialogTitle>Get Miles</DialogTitle>
        <DialogContent>
          <TextField
            label="Street From"
            value={streetFrom}
            onChange={(e) => setStreetFrom(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City From"
            value={cityFrom}
            onChange={(e) => setCityFrom(e.target.value)}
            fullWidth
            margin="normal"
            />
            <TextField
            label="State/Province From"
            value={stateFrom}
            onChange={(e) => setStateFrom(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Street To"
            value={streetTo}
            onChange={(e) => setStreetTo(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="City To"
            value={cityTo}
            onChange={(e) => setCityTo(e.target.value)}
            fullWidth
            margin="normal"
            />
            <TextField
            label="State/Province To"
            value={stateTo}
            onChange={(e) => setStateTo(e.target.value)}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleFormSubmit} color="primary">
            Search
          </Button>
        </DialogActions>
      </Dialog>
    </div>


      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />} component ={Link} to="/reports">
        Reports
      </Button>      
    </Stack>
    </Box>
  )
}

export default MiddleNavBar
