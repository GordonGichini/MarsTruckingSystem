import React from 'react';
import { Typography, makeStyles, Button, TextField, Box, ButtonGroup, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

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
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  searchInput: {
    width: '400px',
  },
  addressesTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  buttonGroupContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  tableContainer: {
    marginTop: theme.spacing(2),
  },
}));

const addressesData = [
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    location: 'New York',
  },
  {
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    phone: '987-654-3210',
    location: 'Los Angeles',
  },
  // Add more address data objects as needed
];

export default function Addresses() {
  const classes = useStyles();

  return (
    <div>
          <Typography variant="h6" className={classes.title}>
            Addresses 
          </Typography>

      <Box className={classes.buttonContainer}>
        <Button variant="contained" className={classes.button}>
          Add Address
        </Button>
        <Button variant="contained" className={classes.button}>
          Export Spreadsheet
        </Button>
        <Button variant="contained" className={classes.button}>
          Import Address
        </Button>
      </Box>

      <Box className={classes.searchContainer}>
        <TextField
          className={classes.searchInput}
          variant="outlined"
          placeholder="Search..."
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Box>

      <Box className={classes.addressesTitleContainer}>
        <Typography variant="h4">Addresses</Typography>
      </Box>

      <Box className={classes.videoContainer}>
        {/* Add your addresses video component here */}
        {/* <AddressesVideo /> */}
      </Box>

      <Box className={classes.buttonGroupContainer}>
        <ButtonGroup variant="contained" aria-label="address retrieval buttons">
          <Button>All Addresses</Button>
          <Button>Consignees</Button>
          <Button>Customers</Button>
          <Button>Shippers</Button>
          <Button>Drivers</Button>
          <Button>Maintenance vendors</Button>
        </ButtonGroup>
      </Box>

      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addressesData.map((address, index) => (
              <TableRow key={index}>
                <TableCell>{address.name}</TableCell>
                <TableCell>{address.email}</TableCell>
                <TableCell>{address.phone}</TableCell>
                <TableCell>{address.location}</TableCell>
                <TableCell>
                  {/* Add actions buttons or components here */}
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
