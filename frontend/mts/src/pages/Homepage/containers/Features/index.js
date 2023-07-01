import React from 'react'
import { Typography ,Button} from '@mui/material';
import { Box, Stack } from '@mui/system';
import {Quality_guarantee_image} from '../../assets'

import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Features = () => {
  return (
    <Box>

       <Box >
                
                <Stack 
                    direction="row" 
                
                    sx={{height:'100%',
                    justifyContent: 'space-evenly',
                    my:"30px",
                    ml:"10px",
                    }}>
         <Box 
            
            sx={{
            width:"400px",
            justifyContent: 'flex-start',
            borderColor:"rgb(52,52,52)"
           }}>
                  <img src={Quality_guarantee_image} width='100%' />
            </Box>

            <Box sx={{
              width:"700px",
            }}>
                <Typography
                sx={{
                    my:"10px",
                    fontSize:"25px",
                    width:"600px",
                }}
                >
                 <CheckBoxIcon/> <b>Plug and Play </b>
                  – plug the data reader into your truck and it syncs to your mobile app automatically
                  <br/>
                  <br/>
                  <CheckBoxIcon/> <b>Easy to use </b>
                  – record, update, and edit your logs with ease  <br/>
                  <br/>
                  <CheckBoxIcon/> <b>Compliance  </b>
                  Fully compliant with all regulations of the ELD mandate.
                  <br/>
                  <br/>
                  <CheckBoxIcon/>  <b>Dispatcher Dashboard</b>
                  – driver locations, available time on the hours of service timers
                </Typography>

        </Box>
        </Stack>
        </Box>
      
    </Box>
  )
}

export default Features