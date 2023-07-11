import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, Button, Box, TableContainer, Table, TableBody, TableRow, TableCell, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    backgroundColor: '#f5f5f5',
    marginBottom: theme.spacing(2),
  },
  videoButton: {
    margin: theme.spacing(2),
  },
  tableContainer: {
    marginBottom: theme.spacing(2),
  },
  formContainer: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  form: {
    marginRight: theme.spacing(2),
  },
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Company Name Profile
          </Typography>
          <Button color="inherit">Edit Options</Button>
          <Button color="inherit">Subscription</Button>
          <Button color="inherit">Notifications</Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h4">Profile</Typography>

      <Box className={classes.buttonContainer}>
        <Box>
          <Typography variant="h6">Add Your First Truck</Typography>
          <Box className={classes.videoContainer}>
            {/* Place your video component here */}
          </Box>
          <Button variant="contained" color="primary" className={classes.videoButton}>
            Click to Add Your First Truck
          </Button>
        </Box>

        <Box>
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Trial Start:</TableCell>
                  <TableCell>Start Date</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trial End:</TableCell>
                  <TableCell>End Date</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Days of Trial Remaining:</TableCell>
                  <TableCell>11 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="body2" className={classes.notice}>
            First bill will be at the end of the trial period in 11 days
          </Typography>
        </Box>
      </Box>

      <Box className={classes.formContainer}>
        <Box className={classes.form}>
          <Typography variant="h6">Company Details</Typography>
          <TextField label="Address" fullWidth />
          <TextField label="Primary Phone" fullWidth />
          <TextField label="Alt" fullWidth />
          <TextField label="Website" fullWidth />
        </Box>

        <Box className={classes.form}>
          <Typography variant="h6">Account Owner Details</Typography>
          <TextField label="Name" fullWidth />
          <TextField label="Email" fullWidth />
        </Box>
      </Box>

      <Typography variant="h6">Users</Typography>
      <Box className={classes.buttonContainer}>
        <Button variant="contained" color="primary">Add User</Button>
        <Button>Show Inactive Users</Button>
      </Box>

      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roles</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>johndoe@example.com</TableCell>
              <TableCell>
                <ul>
                  <li>Owner</li>
                  <li>Dispatch</li>
                  <li>Accounting</li>
                  <li>Mechanic</li>
                  <li>ELD Driver</li>
                </ul>
              </TableCell>
              <TableCell>
                <Button>Edit</Button>
                <Button>Deactivate</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>janesmith@example.com</TableCell>
              <TableCell>
                <ul>
                  <li>Accounting</li>
                </ul>
              </TableCell>
              <TableCell>
                <Button>Edit</Button>
                <Button>Deactivate</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProfilePage;
