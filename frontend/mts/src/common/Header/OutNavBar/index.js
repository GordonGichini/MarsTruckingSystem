import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { NavLink, Link } from 'react-router-dom'; 


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'black',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'green',
    },
  },
  active: {
    fontWeight: 'bold',
  },
}));

function OutNavBar() {
  const classes = useStyles();

  return ( 
    <AppBar 
    position="static" className={classes.appBar}>
      <Toolbar>
        <Typography 
        variant="h6" component={Link} to="/">
          <img src="mts/src/common/assets/brand/logo.png" alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
          MTS
        </Typography>
        <Button 
        color="inherit"
        component={NavLink}
        to="/"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Home</Button> 

        <Button 
        color="inherit"
        component={NavLink}
        to="/MTS"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >MTS</Button> 

        <Button 
        color="inherit"
        component={NavLink}
        to="/ELD"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >ELD</Button> 
        <Button 
        color="inherit"
        component={NavLink}
        to="/Our_story"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Our Story</Button>  

        <Button 
        color="inherit"
        component={NavLink}
        to="/Blog"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Blog</Button> 
        <Button 
        color="inherit"
        component={NavLink}
        to="/support"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Support</Button> 
        <Button 
        color="inherit"
        component={NavLink}
        to="/"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Login</Button> 
        <IconButton 
        color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default OutNavBar;