import { Typography,Stack} from '@mui/material';
import {Box} from '@mui/material';
import React from 'react';
import { TruckingOffice_integration } from '../../assets';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';


const Intergration = () => {
  return (

<Box height="600px">
    <Stack 
    direction="row" 
   
    sx={{height:'100%',
    justifyContent: 'space-evenly',
    backgroundColor:"rgb(220,220,220)"
    }}>
            <Box width="500px" 
           >
                <Typography variant="h3"
                align="center"
                 sx={{mt:"150px",
                 fontWeight:"bold"

                 }}
                >
                Get the<br/>
                Trucking software<br/>
                and ELD<br/>
                that work together!

                </Typography>
            </Box>
            <Box 
            component="span"
            sx={{width:"500px",
            display: 'flex',
            backgroundColor: "red",
            mt:"50px",
            mb:"100px",
            borderRadius:"5px"
           }}>
                  <img src={TruckingOffice_integration} height="500px"  />
            </Box>
      </Stack>
  </Box>
  )
}

export default Intergration
