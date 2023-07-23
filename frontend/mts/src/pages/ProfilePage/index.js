import React from 'react';
import EditPage from './EditPage';
//import Footer from './HomePage/components/Footer'
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography, makeStyles, Button, Box, TableContainer, Table, TableBody, TableRow, TableCell, TextField } from '@material-ui/core';


export { EditPage }

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: 'grey',
    alignItems: 'center',
    height: '300px',
    width: '600px',
    backgroundColor: '#f5f5f5',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
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
      <InNavBar />
      <Box mt={12} ml={2} display="flex">
        <Stack direction="row" spacing={2}>
          <Button color="inherit"
          component={Link}
          to="./editpage"
          variant="outlined"
          >Edit Options
          </Button>
          <Button color="inherit"
          component={Link}
          to='./subscription'
          variant="outlined"
          >Subscription
          </Button>
          <Button color="inherit"
          component={Link}
          to="./notifications"
          variant="outlined"
          >Notifications
          </Button>
          </Stack>
        </Box>
          <Typography variant="h4" className={classes.title}>
            Chakra Logistics Limited
          </Typography>

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
              <TableCell>Roles</TableCell> 
              <TableCell>
                <ul>
                  <li>Owner</li>
                  <li>Dispatch</li>
                  <li>Accounting</li>
                  <li>Mechanic</li>
                  <li>ELD Driver</li>
                </ul>
              </TableCell>
              </TableRow>

            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>              
              <TableCell>Actions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>johndoe@example.com</TableCell>
             
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
