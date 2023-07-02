import { Typography,Box } from '@mui/material'
import React from 'react'
import {TruckingOffice_workflow} from '../../assets'
const HowItWorks = () => {
  return (
    <Box>
        <Typography  variant="h2"
        align="center"
        sx={{mt:"10px",
        fontWeight:"bold"}}
        >
        How does it work?
        </Typography>
        <Typography variant="h5"
        align="center"
        sx={{mt:"10px",
        fontWeight:"bold"}}
        >
        The power is in the process!
        </Typography>
        <Box
        align="center"
        sx={{width:'100%',
        display: 'flex',
        mt:"10px",
        mb:"10px",
        justifyContent: 'space-around',
        borderRadius:"5px",
        alignItems: 'center' 
       }}
        >
        <img src={TruckingOffice_workflow} width='1100px'   />
        </Box>
    </Box>
    
  )
}

export default HowItWorks
