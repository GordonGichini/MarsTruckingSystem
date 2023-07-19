import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link, NavLink, useLocation } from 'react-router-dom';
import InNavBar from '../common/Header/InNavBar/index.js'; 
import OutNavBar from '../common/Header/OutNavBar/index.js';


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
  const location = useLocation();

  //check if the current location is the dashboard or other private pages
  const isDashboard = location.pathname.startsWith('/dashboard');
  const showDashboardNavbar = isDashboard;

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">MTS</Typography>
          {showDashboardNavbar ? (
            <InNavBar /> //show dashboard navbar
          ) : (
            <OutNavBar /> // show homepage navbar
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
