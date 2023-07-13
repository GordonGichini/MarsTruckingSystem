import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles, Menu, MenuItem } from '@material-ui/core';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Box, colors } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import Divider from '@mui/material/Divider'; 
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#212121',
    marginBottom: theme.spacing(0, 2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    marginLeft: theme.spacing(0.1),
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: 'green',
    },
  },
  active: {
    fontWeight: 'bold',
  }, 
  arrowIcon: {
    marginRight: theme.spacing(0.2)
  },
}));


export default function InNavBar() { 
  const classes = useStyles(); 
  const [reportsAnchorEl, setReportsAnchorEl] = React.useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = React.useState(null);

  const handleReportsMenuOpen = (event) => {
    setReportsAnchorEl(event.currentTarget);
  };

  const handleReportsMenuClose = () => {
    setReportsAnchorEl(null);
  }; 

  const handleSettingsMenuOpen = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsMenuClose = () => {
    setSettingsAnchorEl(null);
  };
  
  return (
    <AppBar className={classes.appBar}> 
    <Toolbar>
    <Typography variant="h6" component={Link} to="/" >
  <img src="common/assets/brand/logoIcon.png" alt="Logo" style={{ marginRight: '10px', height: '30px' }} />
  MTS
    </Typography> 
    <Box sx={{display:"flex",
    flexGrow: 1,
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
          <div>
            <IconButton
        edge="end"
        color="inherit"
        aria-label="reports"
        aria-controls="reports-menu"
        aria-haspopup="true"
        onClick={handleReportsMenuOpen}
      >
        <ExpandMoreIcon className={classes.arrowIcon} />
      </IconButton> 

      <Menu
        id="reports-menu"
        anchorEl={reportsAnchorEl}
        keepMounted
        open={Boolean(reportsAnchorEl)}
        onClose={handleReportsMenuClose}
      >
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-company-overview">
          Company Overview
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-profit-loss">
          Profit and Loss
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-driver-pay">
          Driver Settlement
        </MenuItem> 
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-tax">
          Tax
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-expenses">
          Expenses
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-state-miles">
          IRP - State Miles
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-fuel-reports">
          Fuel Expenses
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-reefer-fuel-expenses">
          Reefer Fuel Expenses
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-fuel-vendor-requests">
          Fuel Vendor
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-ifta">
          Quartely IFTA
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-quartely-maintenance">
          Quartely Maintenance
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-unit-revenue-per-mile">
          Unit Revenue
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-unit-operating-income">
          Unit Operating Income
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-miles-per-gallon">
          Miles Per Gallon
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-unit-miles">
          Unit Miles
        </MenuItem>
        <MenuItem onClick={handleReportsMenuClose} component={NavLink} to="/reports/get-over-road-days">
          Over the Road Days
        </MenuItem>
        </Menu>
        </div>

          <Divider orientation="vertical" flexItem />
          <Button
           colour="inherit"
           component={NavLink}
           to="/settings"
           exact
           activeClassName={classes.active}
           className={classes.navLink}
          >Settings</Button> 
          <div>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="settings"
        aria-controls="settings-menu"
        aria-haspopup="true"
        onClick={handleSettingsMenuOpen}
      >
        <ExpandMoreIcon className={classes.arrowIcon} />
      </IconButton> 

      <Menu
        id="settings-menu"
        anchorEl={settingsAnchorEl}
        keepMounted
        open={Boolean(settingsAnchorEl)}
        onClose={handleSettingsMenuClose}
      >
        <MenuItem onClick={handleSettingsMenuClose} component={NavLink} to="/settings/addresses">
          Addresses
        </MenuItem>
        <MenuItem onClick={handleSettingsMenuClose} component={NavLink} to="/settings/drivers">
          Drivers
        </MenuItem>
        <MenuItem onClick={handleSettingsMenuClose} component={NavLink} to="/settings/units">
          Units
        </MenuItem>
        <MenuItem onClick={handleSettingsMenuClose} component={NavLink} to="/settings/user-guide">
          User Guide
        </MenuItem> 
        <MenuItem onClick={handleSettingsMenuClose} component={NavLink} to="/settings/forum">
          Forum
        </MenuItem>
      </Menu>
    </div>

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
           to="/company-profile"
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
          >Signout</Button>
          <Divider orientation="vertical" flexItem />
</ButtonGroup>
    </Box>

    </Box> 
    </Toolbar>
    </AppBar>
  );
}