import React from 'react';
import EditPage from './EditPage';
//import Footer from './HomePage/components/Footer'
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Typography, makeStyles, Button, Box, Grid, TableContainer, Table, TableBody, TableHead, TableRow, TableCell, TextField } from '@material-ui/core';


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
    alignItems: 'center',
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
  noteContainer: {
    display: 'flex',
    borderStyle: '1px solid green',
    height: '120px',
    width: '100%',
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    justifyContent: 'flex-start',

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
            to="/editpage"
            variant="outlined"
          >Edit Options
          </Button>
          <Button color="inherit"
            component={Link}
            to='/subscription'
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
      <Typography variant="h5" className={classes.title}>
        Chakra Logistics Limited
      </Typography>
      <Box mt={2} p={1} border="1px solid green" sx={{ m: "20px", alignItems: "center", display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" className={classes.btn}>
          Green
        </Button>
        <Typography>
          Notice: Company address updated successfully
        </Typography>
      </Box>

      <Box className={classes.buttonContainer}>
        <Box mt={2} ml={2}>
          <Box mt={3} ml={3}>
            <Typography variant="h6">Next Step: Add Your First Truck</Typography>
          </Box>
          <Box className={classes.videoContainer}>
            Next Step: Add your First Truck
            {/* Place your video component here */}
          </Box>
          <Button variant="contained" color="primary" className={classes.videoButton}>
            Click to Add Your First Truck
          </Button>
        </Box>
        <Box className={classes.noteContainer}>
          <TextField
            label="Notes"
            variant="outlined"
            multiline
            fullWidth />
        </Box>
      </Box>

      <Box>
        <TableContainer className={classes.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Trial Start:</TableCell>
                <TableCell>Trial End:</TableCell>
                <TableCell>Days of Trial Remaining:</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>11 days</TableCell>
              </TableRow>                
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="body2" className={classes.notice}>
          First bill will be at the end of the trial period in 11 days
        </Typography>
      </Box>

      <Box className={classes.formContainer}>
        <Grid item xs={12} md={6}>
        <Box className={classes.form} border='1px solid black' p={2}>
          <Typography variant="h6">Company Details</Typography>
          <Button variant="outlined">Edit Profile</Button>
          <Button variant="outlined">Upload Logo</Button>
          <Typography variant="subtitle1" gutterBottom>Address:</Typography>
          <Typography variant="body1">Company Address</Typography>
          <Typography variant="subtitle1" gutterBottom>Primary:</Typography>
          <Typography variant="body1">Primary Data</Typography>
          <Typography variant="subtitle1"gutterBottom>Website:</Typography>
          <Typography variant="body1">Website Data</Typography>
        </Box>
        </Grid>

        <Grid item xs={12} md={6}>
        <Box className={classes.form} border="1px solid black" p={2}>
          <Typography variant="h6">Account Owner Details</Typography>
          <Button variant="outlined">Edit</Button>
          <Button variant="outlined">Change Account Owner</Button>
          <Typography variant="subtitle1" gutterBottom>Name:</Typography>
          <Typography variant="body1">Account Owner Name</Typography>
          <Typography variant="subtitle1" gutterBottom>Email:</Typography>
          <Typography variant="body1">Account Owner Email</Typography>
        </Box>
        </Grid>
        </Box>

        <Typography variant="h6">Users</Typography>
        <TableContainer className={classes.tableContainer}>
          <Table> 
            <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roles
                <Table>
              <TableHead>
                <TableRow>
              <TableCell>Owner</TableCell>
              <TableCell>Dispatcher</TableCell>
              <TableCell>Accounting</TableCell>
              <TableCell>Mechanic</TableCell>
              <TableCell>ELD Driver</TableCell>           
            </TableRow>
            </TableHead>
            </Table>
            </TableCell>
              <TableCell>Active</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>johndoe@example.com</TableCell>
              <TableCell>
                <Table>
                  <TableBody>
                    <TableRow>
                    <TableCell>✓</TableCell>
                      <TableCell>✓</TableCell>
                      <TableCell>✓</TableCell>
                      <TableCell>✓</TableCell>
                      <TableCell>✓</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="success">Active</Button>
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
