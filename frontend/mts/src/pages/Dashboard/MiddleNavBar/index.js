import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import Stack from '@mui/material/Stack';


const MiddleNavBar = () => {
  return (
    <Box>
  <Stack direction="row" spacing={0.5}>
      <Button variant="outlined"  startIcon={<AddTaskOutlinedIcon />}  > 
      <Typography className='icon_btn'> Add Planned Load </Typography> 
      </Button>
      <Button variant="outlined" startIcon={<LocalShippingOutlinedIcon />}>
        Add Trip
      </Button>
      <Button variant="outlined" startIcon={<AddShoppingCartOutlinedIcon />}>
        Add Expenses
      </Button>
      <Button variant="outlined" startIcon={<DescriptionOutlinedIcon />}>
        Add Invoice
      </Button>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />}>
        Add Maintenace
      </Button>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />}>
        Get Milestones
      </Button>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />}>
        Advanced Search
      </Button>
      <Button variant="outlined" startIcon={<AddTaskOutlinedIcon />}>
        Reports
      </Button>
      
    </Stack>
    </Box>
  )
}

export default MiddleNavBar
