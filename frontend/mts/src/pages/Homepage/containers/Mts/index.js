import React from 'react'
import { Box, Stack } from '@mui/system'
import { Typography } from '@mui/material'
import {TruckingOffice_Trips_List_Screenshot,one_choice_owner} from '../../assets'
const Mts = () => {
  return (
    <Box >
       <Typography variant="h2"
       align="center"
       sx={{
       fontWeight:"bold"

       }}
       >
       Mars Trucking Software (MTS) 
       </Typography>

       
        
       <Stack 
          direction="row"         
          sx={{
          justifyContent: 'space-evenly',
         mx:"70px",
         my:"20px",
          }}>

            <Box sx={{
              width:"600px",
             
              
            }}>
                <Typography>
                  <b>Dispatch </b>
                  If you’re looking to find high-paying freight, then hiring a dispatch service or enlisting 
                  the help of an independent truck dispatcher is a convenient 
                  and relatively hassle-free option. But, is it right for your trucking business?
                  <br/>
                  <b>Invoice </b>
                  A trucking invoice is a document companies use to bill their clients for services rendered.
                  This could include transportation of goods, storage fees, or other trucking services the company may
                    offer. A trucking invoice will feature a list of items and services the trucking company has 
                  provided, along with the corresponding cost for each. 
                  <br/>
                  <b>Expenses </b>
                  A trucking invoice is a document companies use to bill their clients for services rendered.
                  
                  <br/>
                  <b>Track Stats </b>
                  A trucking invoice is a document companies use to bill their clients for services rendered.
                  This could include transportation of goods, storage fees, or other trucking services the company may
                  
                </Typography>

        </Box>

            <Box 
            
            sx={{
            width:"650px",
            justifyContent: 'flex-end',
            mx:"10px",
            mt:"3px",
            ml:"20px",
            borderRadius:"8px",
            border: 15,
            borderColor:"rgb(52,52,52)"
           }}>
                  <img src={TruckingOffice_Trips_List_Screenshot} width='100%' />
            </Box>
      </Stack>

      <Box >
    <Stack 
    direction="row" 
   
    sx={{height:'100%',
    justifyContent: 'space-evenly',
    my:"80px",
    }}>
            <Box width="500px" 
           >
                <Typography 
                align="center"
                 sx={{mt:"80px",
                 fontWeight:"bold",
                 fontSize:"25px",
                 color:"rgb(118,255,122)"

                 }}
                >
              TruckingOffice is the most popular software for owner operators and fleet builders 
              everywhere because it is so easy, effective, and affordable!
                </Typography>
            </Box>
            <Box 
            component="span"
            sx={{width:"500px",
            display: 'flex',
           }}>
                  <img src={one_choice_owner}  width='100%' />
            </Box>
      </Stack>
  </Box>
    </Box>

  )
}

export default Mts
