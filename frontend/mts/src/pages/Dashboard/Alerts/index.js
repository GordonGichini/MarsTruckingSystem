import React from 'react';
import { Grid, Box, Button, Typography } from '@material-ui/core';

function Alerts() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Box bgcolor="primary.main" height="100%" padding={2}>
          <Button variant="outlined" color="secondary">Alert 1</Button>
          </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box bgcolor="secondary.main" height="100%" padding={2}>
              <Button variant="contained" color="primary">Alert 2</Button>
              </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box bgcolor="info.main" height="100%" padding={2}>
                  <Button variant="contained" color="primary">Alert 3</Button>
                </Box>
        </Grid>
      </Grid>
  );
};

export default Alerts;