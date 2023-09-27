import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAddressesAsync, createAddressAsync, updateAddressAsync, deleteAddressAsync } from '../../redux/slices/addressSlice';
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
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

function Addresses() {
  const classes = useStyles();
  const addresses = useSelector((state) => state.addresses.addresses);
  const status = useSelector((state) => state.addresses.status);
  const error = useSelector((state) => state.addresses.error);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetch action when the component mounts
    dispatch(fetchAddressesAsync());
  }, [dispatch]);

  if (status === 'loading') {
    // render a loading indicator
    return <div>Loading...</div>;
  } 

  if (status === 'failed') {
    // render an error message
    return <div>Error: {error}</div>;
  }

  const handleCreateAddress = async (newAddress) => {
    //Dispatch the create action and await the result
    const resultAction = await dispatch(createAddressAsync(newAddress));
    //Check if the action was successful
    if (createAddressAsync.fulfilled.match(resultAction)) {
      // Address was successfully created
    }
  };

  const handleUpdateAddress = async (updatedAddress) => {
    // Dispatch the update action and await the result
    const resultAction = await dispatch(updateAddressAsync(updatedAddress))
    // Check if the action was successful
    if (updateAddressAsync.fulfilled.match(resultAction)) {
      // Address was successfully updated
    }
  }

  const handleDeleteAddress = async (idToDelete) => {
    const resultAction = await dispatch(deleteAddressAsync(idToDelete));

    if (deleteAddressAsync.fulfilled.match(resultAction)) {

    }
  }

  return (
    <div>
      <InNavBar />
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
          <Button>Fuel vendors</Button>
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
            {addresses.map((address) => (
              <TableRow key={address.id}>
                <TableCell>{address.name}</TableCell>
                <TableCell>{address.email}</TableCell>
                <TableCell>{address.phone}</TableCell>
                <TableCell>{address.location}</TableCell>
                <TableCell>
                  {/* Add actions buttons or components here */}
                  <Button onClick={() => handleUpdateAddress(address)}>Edit</Button>
                  <Button onClick={() => handleDeleteAddress(address.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </div>
  );
}


export default Addresses;
