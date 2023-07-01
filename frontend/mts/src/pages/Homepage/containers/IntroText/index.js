import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const IntroText = () => {
  return (
    <Box     align="center">
        <Typography variant="h2" align="center"
              sx={{color:"rgb(50,205,50)",
              fontWeight:"bold",
              width:'90%'
            }}>
            Trucking Software For Truckers <br/>That Want To Win!
        </Typography>
        <Typography variant="h5" align="center"
              sx={{color:"Black",
              width:'70%'
            }}>
           Don’t let the mega-fleets be the only ones with all of the advantages. 
TruckingOffice levels the playing field for owner operators and fleet builders by offering the tools needed to win in the trucking industry.
        </Typography>
    </Box>
  )
}

export default IntroText
