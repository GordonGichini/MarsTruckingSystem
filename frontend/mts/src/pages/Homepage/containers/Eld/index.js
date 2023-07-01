import React from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import {TruckingOffice_ELD_Mobile_app_dashboard} from '../../assets';

const Eld = () => {
  return (
    <Box>
<Typography variant="h2"
       align="center"
       sx={{
       fontWeight:"bold",
       mt:"20px",

       }}
       >
      Electronic Logbook (ELD) 
       </Typography>
       <Box >
                <Stack  direction="row" 
                sx={{
                  m:"20px",
                  justifyContent: 'space-evenly' ,
                 
                }}>
                    <Typography 
                    sx={{
                      fontWeight:"bold",
                      fontSize:"30px",
                    }}
                    >
                        Compliant
                    </Typography>
                    <Typography 
                    sx={{
                      fontWeight:"bold",
                      fontSize:"30px",
                    }}>
                        Simple
                    </Typography>
                    <Typography 
                    sx={{
                      fontWeight:"bold",
                      fontSize:"30px",
                    }}>
                        Integrated
                    </Typography>
               
                </Stack>



                <Stack 
    direction="row" 
   
    sx={{height:'100%',
    justifyContent: 'space-evenly',
    my:"30px",
    ml:"80px",
    }}>
                <Box 
            
            sx={{
            width:"300px",
            justifyContent: 'flex-start',
            mx:"70px",
            borderColor:"rgb(52,52,52)"
           }}>
                  <img src={TruckingOffice_ELD_Mobile_app_dashboard} width='100%' />
            </Box>

            <Box sx={{
              width:"700px",
            }}>
                <Typography
                sx={{
                    my:"80px",
                    fontSize:"25px",
                    width:"600px",
                }}
                >
                  <b>Plug and Play </b>
                  – plug the data reader into your truck and it syncs to your mobile app automatically
                  <br/>
                  <br/>
                  <b>Easy to use </b>
                  – record, update, and edit your logs with ease  <br/>
                  <br/>
                  <b>Compliance  </b>
                  Fully compliant with all regulations of the ELD mandate.
                  <br/>
                  <br/>
                  <b>Dispatcher Dashboard</b>
                  – driver locations, available time on the hours of service timers
                </Typography>

        </Box>

        </Stack>
        </Box>
        <Box     align="center">
        
        <Typography align="center"
              sx={{
            color:"Black",
            width:'70%',
            fontSize:"20px",
            }}>
           
 The TruckingOffice ELD is great for owner operators and fleet builders that want an easy affordable way to stay 
 compliant while also streamlining their business like the mega fleets do.<br/><br/>

It is also great for private fleets that want an easy to install and easy to manage ELD solution.<br/><br/>

It is a great ELD solution, but it’s even better when paired with the TMS trucking software!

             </Typography>
    </Box>
    </Box>
  )
}
export default Eld
