import { Typography } from '@mui/material'
import { Box,Stack } from '@mui/system'
import React from 'react'

const Testmonials = () => {
  return (
    <Box height="130px"
    sx={{
        mt:"2rem"
    }}
    >
    <Stack 
    direction="row"    
    sx={{
    height:'100%',
    
    backgroundColor:"rgb(245,245,245)",
    mr:"100px",
    ml:"100px",
    mb:"100px",
    mt:"10px",
    borderRadius:"10px",
    }}>
            <Box width="100%" 
            sx={{
                p:"20px"
            }}
           >
                <Typography 
                align="center"
                 sx={{
                   fontWeight:"light",
                   fontSize:"1rem",
                 }}
                >
                Having natural conversations on social media about your work is authentic and adds another 
                layer of credibility to your company. The main difference between these and other testimonials is
                that the other types are usually requested, whereas social recommendations.

                </Typography>
                <Typography
                align="left"
                sx={{
                  fontWeight:"bold",
                  fontSize:"1rem",
                }}
                >
                    Alpha Mwema 
                </Typography>
                <Typography
                align="left"
                sx={{
                  fontWeight:"light",
                  fontSize:"1rem",
                }}
                >
                    Chief operations officer
                
                </Typography>
            </Box>
            
      </Stack>
  </Box>

  )
}

export default Testmonials
