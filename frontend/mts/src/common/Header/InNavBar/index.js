import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles } from '@material-ui/core';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, colors } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import Divider from '@mui/material/Divider'; 


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'black',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(0.2),
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


export default function InNavBar() { 
  const classes = useStyles(); 
  
  return (
    <AppBar position="static" className={classes.appBar}> 
    <Toolbar>
    <Typography variant="h6" component={Link} to="/" >
  <img src="common/assets/brand/logoIcon.png" alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
  MTS
    </Typography> 
    <Box sx={{display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"
    }} >
      <Box >
      <ButtonGroup variant="text" aria-label="medium outlined primary button group" 
      sx={{width:"100%",
    }}
      > 
      
          <Button
           colour="inherit"
           component={NavLink}
           to="/"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Dashboard</Button>  

          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/trips"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Dispatch</Button>

          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/invoices"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >invoices</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/expenses"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Expenses</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/maintenance_logs"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Maintenances</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/reports"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Reports</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/settings"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Settings</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Switch to ELD</Button>
          <Divider orientation="vertical" flexItem />
    </ButtonGroup>
    </Box>
    <Box>
<ButtonGroup variant="text" aria-label="medium outlined primary button group" 
      sx={{width:"100%",
      }}
      >
        <Button
           colour="inherit"
           component={NavLink}
           to="/profile"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Profile</Button>
          <Divider orientation="vertical" flexItem />
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/support"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Support</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Chat</Button>
          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Signout</Button>
          <Divider orientation="vertical" flexItem />
</ButtonGroup>
    </Box>

    </Box> 
    </Toolbar>
    </AppBar>
  );
}