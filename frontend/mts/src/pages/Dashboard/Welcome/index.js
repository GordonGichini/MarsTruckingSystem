import React from 'react'
import { Box, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <div>
      <Box mt={2} ml={3} p={2} border="1px solid black" position="relative" width="600px" height="325px">
      <Typography variant="h6" gutterBottom>
        Welcome
      </Typography>
      </Box>
    </div>
  )
}

export default Welcome
