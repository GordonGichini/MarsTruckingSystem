import React from 'react';
import { Typography ,Button} from '@mui/material';
import { Box, Stack } from '@mui/system';

import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const OrderEld = () => {
  return (
    <Box 
    sx={{backgroundColor:"rgb(220,220,220)",
    p:"20px",
}}
    >
        <Typography variant="h2"  align="center"
        sx={{
            fontWeight:"bold",
        }}>
          How To Order The ELD
        </Typography>
        <Typography variant="h5"  align="center" 
        sx={{ml:"4rem",
        mr:"4rem",
        mt:"5px"
    }}
        >
       When you order your ELD, we’ll ship you the data reader that plugs into the ECM data port
        on your truck.  It is used to read the required truck data from the ECM and sends it to your 
        ELD mobile app on your phone or tablet.  Don’t worry, it connects via
        blue tooth automatically plus we will send you our simple one page go-live guide.
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
                 order Your ELD Now
                  </Button>
        </Stack>
        <Typography align="center">
        No obligation free trial.  Start now with no credit card required!
        </Typography>
    </Box>
  )
}

export default OrderEld
