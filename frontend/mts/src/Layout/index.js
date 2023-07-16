import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import InNavBar from '../common/Header/InNavBar/index.js'; // Import your existing navbar component


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
  },
  activeNavLink: {
    color: 'green',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">MTS</Typography>
          <InNavBar /> {/* Include your existing navbar component */}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
