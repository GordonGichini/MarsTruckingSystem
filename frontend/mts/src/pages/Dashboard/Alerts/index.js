import React from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack'

function Alerts() {
  return (
    <div>
    <Stack direction="column" spacing={0.5} />
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box bgcolor="primary.main" height="100%" padding={2}>
          <Button variant="contained" style={{ backgroundColor: 'lightgreen', marginBottom: '10px' }}>ELD Signup</Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="secondary.main" height="100%" padding={2}>
              <Button variant="contained" style={{ backgroundColor: 'lightgreen'}}>Edit Company</Button>
              </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box bgcolor="info.main" height="100%" padding={2}>
                  <Button variant="contained" style={{ backgroundColor: 'lightred'}}>Loads</Button>
                </Box>
        </Grid>
      </Grid>
      </div>
  );
};

export default Alerts;