import React from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack'

function Alerts() {
  return (
    <div>
    
    <Grid container spacing={0.2}>
      <Stack direction="column" spacing={0.2}>
      <Grid item xs={12} md={4}>
        <Box ml={2} mt={2}>
        <Typography variant="h6">
          Alerts
        </Typography>
        </Box>
        <Box bgcolor="inherit" border="1px solid green" p={2} sx={{width:"600px", height: 'auto', m:"20px"}}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="contained" style={{ backgroundColor: 'green', marginRight: '10px' }}>ELD Signup</Button>
          <Typography variant="body1">This is an alert for ELD Signup</Typography>
          </Box>
          </Box>
        </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="inherit" border="1px solid green" p={2} sx={{width:"600px", height: 'auto', m:"20px"}}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" style={{ backgroundColor: 'yellow', marginRight: '10px' }}>Edit Company</Button>
              <Typography variant="body1">This is an alert for Edit Company</Typography>
              </Box>
              </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box bgcolor="inherit" border="1px solid green" p={2} sx={{width:"600px", height: 'auto', m:"20px"}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button variant="contained" style={{ backgroundColor: 'red', marginRight: '10px' }}>Loads</Button>
                  <Typography variant="body1">This is an alert for Loads</Typography>
                  </Box>
                </Box>
        </Grid>
        </Stack>
      </Grid>
      </div>
  );
};

export default Alerts;