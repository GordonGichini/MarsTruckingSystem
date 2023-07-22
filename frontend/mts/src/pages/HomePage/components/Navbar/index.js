import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, makeStyles, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Box, colors } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { logo } from '../../assets';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#424242',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(2),
    color: 'green',
    textDecoration: 'none',
    '&:hover': {
      color: 'green',
    },
  },
  active: {
    fontWeight: 'bold',
  },
  arrowIcon: {
    marginRight: theme.spacing(0.1),
    color: 'grey'
  },
}));


export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const [mtsAnchorEl, setMtsAnchorEl] = React.useState(null);
  const [eldAnchorEl, setEldAnchorEl] = React.useState(null);

  const handleMtsMenuOpen = (event) => {
    setMtsAnchorEl(event.currentTarget);
  };

  const handleMtsMenuClose = () => {
    setMtsAnchorEl(null);
  }; 

  const handleEldMenuOpen = (event) => {
    setEldAnchorEl(event.currentTarget);
  };

  const handleEldMenuClose = () => {
    setEldAnchorEl(null);
  };
  return (
    <AppBar position="static" className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" >
        <img src={logo} alt="Logo" style={{ marginRight: '10px', height: '50px' }} />
        </Typography>
  <Box sx={{display:"flex",
  justifyContent:"space-between",
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
        <Button
        color="inherit"
        component={NavLink}
        to="/mts"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >MTS</Button>
        <div>
          <IconButton
          edge="end"
          color="inherit"
          aria-label="mts"
          aria-controls="mts-menu"
          aria-haspopup="true"
          onClick={handleMtsMenuOpen}
          > 
          <ExpandMoreIcon className={classes.arrowIcon} />
          </IconButton>
          <Menu
          id="mts-menu"
          anchorEl={mtsAnchorEl}
          keepMounted
          open={Boolean(mtsAnchorEl)}
          onClose={handleMtsMenuClose}
          >
            <MenuItem onClick={handleMtsMenuClose} component={NavLink} to="/">
              MTS
            </MenuItem>
            <MenuItem onClick={handleMtsMenuClose} component={NavLink} to="/">
              Features
            </MenuItem>
            <MenuItem onClick={handleMtsMenuClose} component={NavLink} to="/">
              Tour
            </MenuItem>
            <MenuItem onClick={handleMtsMenuClose} component={NavLink} to="/">
              Pricing
            </MenuItem>
          </Menu> 
          </div>
        <Button
        color="inherit"
        component={NavLink}
        to="/eld"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >ELD</Button> 

        <div>
          <IconButton
          edge="end"
          color="inherit"
          aria-label="eld"
          aria-controls="eld-menu"
          aria-haspopup="true"
          onClick={handleEldMenuOpen}
          >
          <ExpandMoreIcon className={classes.arrowIcon} />
          </IconButton>
          <Menu 
          id="eld-menu"
          anchorEl={eldAnchorEl}
          keepMounted
          open={Boolean(eldAnchorEl)}
          onClose={handleEldMenuClose}
          >
            <MenuItem onClick={handleEldMenuClose} component={NavLink} to="/">
              ELD
            </MenuItem>
            <MenuItem onClick={handleEldMenuClose} component={NavLink} to="/">
              ELD features
            </MenuItem>
            <MenuItem onClick={handleEldMenuClose} component={NavLink} to="/">
              ELD pricing
            </MenuItem>
          </Menu>  
          </div>
       
        <Button
        color="inherit"
        component={NavLink}
        to="/our_story"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Our Story</Button>
        <Button
        color="inherit"
        component={NavLink}
        to="/blog"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Blog</Button>
        </ButtonGroup>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
        color="inherit"
        component={NavLink}
        variant="outlined"
        to="/signup"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Sign up</Button>
        <Button
        color="inherit"
        component={NavLink}
        variant="contained"
        to="/login"
        exact
        activeClassName={classes.active}
        className={classes.navLink}
        >Login</Button>
  </Box>   
  </Box>
  </Toolbar>
  </AppBar>
);
}
 