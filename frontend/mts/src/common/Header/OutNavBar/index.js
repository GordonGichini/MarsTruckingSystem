import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { AppBar, Toolbar, IconButton, Typography, makeStyles } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons'
import { Box, colors } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import Divider from '@mui/material/Divider'; 


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(2),
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



export default function Navbar() {
  const classes = useStyles();
  return ( 
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" >
          <img src="./logoIcon.png" alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
          Mts
          </Typography>
    <Box sx={{display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    width:"100%"
    }} >
      <Box >
      <ButtonGroup
      variant="text"
      aria-label="medium outlined primary button group" 
      sx={{ width: "100%", justifyContent: 'space-between', paddingRight: '8px' }}
      >
          <Button
          color="inherit"
          component={NavLink}
          to="/"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          sx={{ margin: '0 8px' }}
          >Home</Button>         
          
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/mts"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >MTS</Button>
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/eld"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >ELD</Button>
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/our_story"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >Our Story</Button>
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/blog"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >Blog</Button>
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/help"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >Help</Button>
          <Divider orientation="vertical" flexItem />
          <Button
          color="inherit"
          component={NavLink}
          to="/login"
          exact
          activeClassName={classes.active}
          className={classes.navLink}
          >Login</Button>
    </ButtonGroup>
    </Box>   
    </Box>
    </Toolbar>
    </AppBar>
  );
}