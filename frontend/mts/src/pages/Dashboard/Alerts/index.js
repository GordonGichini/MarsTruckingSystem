import React from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack'

function Alerts() {
  return (
    <div>
    
    <Grid container spacing={2}>
      <Stack direction="column" spacing={0.5}>
      <Grid item xs={12} md={4}>
        <Box ml={2} mt={2}>
        <Typography variant="h6">
          Alerts
        </Typography>
        </Box>
        <Box bgcolor="white" p={2} sx={{width:"600px", m:"20px"}}>
          <Button variant="contained" style={{ backgroundColor: 'lightgreen', marginBottom: '10px' }}>ELD Signup</Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="white" p={2} sx={{width:"600px", m:"20px"}}>
              <Button variant="contained" style={{ backgroundColor: 'lightgreen'}}>Edit Company</Button>
              </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box bgcolor="white" p={2} sx={{width:"600px", m:"20px"}}>
                  <Button variant="contained" style={{ backgroundColor: 'lightred'}}>Loads</Button>
                </Box>
        </Grid>
        </Stack>
      </Grid>
      </div>
  );
};

export default Alerts;