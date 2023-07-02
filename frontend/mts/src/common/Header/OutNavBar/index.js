import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function OutNavBar() {
  return ( 
    <AppBar 
    position="static">
      <Toolbar>
        <Typography 
        variant="h6" style={{
          flexGrow: 1
        }}>
          Mars Trucking System
        </Typography>
        <Button 
        color="inherit" component=
        {Link} to="/home">Home</Button> 
         <Button 
        color="inherit" component=
        {Link} to="/mts">MTS</Button>
         <Button 
        color="inherit" component=
        {Link} to="/eld">ELD</Button>
         <Button 
        color="inherit" component=
        {Link} to="/our-story">Our Story</Button>
         <Button 
        color="inherit" component=
        {Link} to="/blog">Blog</Button>
         <Button 
        color="inherit" component=
        {Link} to="/support">Support</Button>
         <Button 
        color="inherit" component=
        {Link} to="/login">login</Button> 
        <IconButton 
        color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default OutNavBar;