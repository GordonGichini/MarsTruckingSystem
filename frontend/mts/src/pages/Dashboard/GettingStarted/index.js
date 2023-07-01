import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import './styles.css'
const GettingStarted = () => {
  return (
    
    <Box>
      <Box 
      sx={{
        width:"500px",
        m:"20px",        
    }}
      
      >

    <Typography>Getting Started</Typography>
    <Stack direction="column" spacing={1} >
      
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First truck</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First driver</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First shipper</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First consignees</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First planned load</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First Trip</Typography>
      </Button>
      <Button variant="outlined" startIcon={<Filter1OutlinedIcon sx={{ml:"3px"}} />} 
      sx={{
        m:'0',
        justifyContent: 'flex-start'
       }}
      >
      <Typography sx={{ml:"30px"}}>  Add Your First invoice</Typography>
      </Button>
      
      
    </Stack>
   </Box>
   </Box>
  )
}

export default GettingStarted