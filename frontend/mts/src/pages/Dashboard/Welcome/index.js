import React from 'react'
import { Box, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <div>
      <Typography sx={{ml: '20px', mb: '20px'}} variant="h6" gutterBottom>
        Welcome
      </Typography>
      <Box mt={2} ml={3} p={2} border="1px solid black" position="relative" width="600px" height="325px">
      <Typography variant="body1">
        Welcome
      </Typography>
      </Box>
    </div>
  )
}

export default Welcome
