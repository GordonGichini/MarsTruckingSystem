import { Typography ,Button} from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
const GetStarted = () => {
  return (
    <Box 
    sx={{backgroundColor:"rgb(220,220,220)",
    p:"5rem",
}}
    >
        <Typography variant="h2"  align="center"
        sx={{
            fontWeight:"bold",
        }}>
        How To Get started
        </Typography>
        <Typography variant="h5"  align="left" 
        sx={{ml:"4rem",
        mr:"4rem",
        mt:"2rem"
    }}
        >
        Getting started with TruckingOffice is easy.  We offer a no obligation free trial of our 
        trucking software so that you can try it before you buy it.<br/><br/>

        It only takes a minute to fill out the short form to get started then you will have access to the full 
        version of the trucking software.  After you enter a few loads into the system, you will  see results immediately.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="contained" 
                 sx={{backgroundColor:"rgb(50,205,50)",
                 color:"rgb(255,240,245)",
                fontWeight:"3rem",
                p:"10px",
                m:"2rem",
                }}
                  endIcon={<NavigateNextOutlinedIcon 
                
                  />}>
                    Start Free Trial Today
                  </Button>
        </Stack>
        <Typography align="center">
        No obligation free trial.  Start now with no credit card required!
        </Typography>
    </Box>
  )
}

export default GetStarted
