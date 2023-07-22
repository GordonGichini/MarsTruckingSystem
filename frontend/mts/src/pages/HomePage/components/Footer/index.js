import React from 'react';
import { Typography, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    color: '#fff',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  poweredBy: {
    marginTop: theme.spacing(1),
    color: '#76FF03',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="body2">All rights reserved &copy; Mars Trucking System</Typography>
      <Box className={classes.poweredBy}>
        <Typography variant="body2">Powered by Syneric Systems</Typography>
      </Box>
    </div>
  );
}

export default Footer;
