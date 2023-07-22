import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {truckbackground} from '../../assets/';
import {Typography ,Button,Grid,Stack  }from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const SubHeading = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
sx={{backgroundImage:`url(${truckbackground})`,
height:"300px",
width:'100%',
backgroundPosition: "center",
marginTop:"2px",
backgroundSize:"cover",
backgroundRepeat: "no-repeat",


}}
>
<Grid item xs>
              <Typography gutterBottom variant="h2" align="center"
              sx={{color:"whitesmoke",
              fontWeight:"bold"
            }}
              component="div">
               Mars Trucking Software
               
              </Typography>

              <Typography gutterBottom variant="h4" align="center"
              sx={{color:"whitesmoke" }}
              component="div">
               We Solve all your Logistic needs
               
              </Typography>

              <Stack direction="row" spacing={2} justifyContent="center" >
                  <Button variant="contained" 
                 sx={{backgroundColor:"rgb(50,205,50)",
                 color:"rgb(255,240,245)",
                fontWeight:"3rem"
                }}
                  endIcon={<NavigateNextOutlinedIcon 
                
                  />}>
                    Start Free Trial Today
                  </Button>
                  <Button variant="contained"
                  sx={{backgroundColor:"rgb(50,205,50)",
                  color:"rgb(255,240,245)",
                  }}
                  endIcon={<NavigateNextOutlinedIcon />}>
                    Call Us(+254 769 227 863)
                  </Button>
    </Stack>
     </Grid>
  
</Grid>
    </React.Fragment>
  )
}

export default SubHeading