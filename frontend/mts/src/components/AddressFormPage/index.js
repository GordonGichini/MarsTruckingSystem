import React, { useState } from 'react';
import { Typography, TextField, Button, Box, MenuItem, Select } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createAddressAsync } from '../../redux/slices/addressSlice';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  expenseContainer: {
      marginTop: theme.spacing(2),
      marginLeft: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),

  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  sectionSubtitle: {
    marginBottom: theme.spacing(1),
  },
  search: {
    width: '68%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
      marginLeft: theme.spacing(2),
      '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'green',
    },
    '&:hover fieldset': {
      borderColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
   },

  },
  inputField: {
      width: '68%',
      margin : theme.spacing(1, 0),
      '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'green',
    },
    '&:hover fieldset': {
      borderColor: 'green',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
   },
    },
  button: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& .MuiButton-outlined': {
          borderColor: '#00C853', // Green color for button lines
          color: '#00C853', // Green color for button text
        },
        '& .MuiButton-outlined:hover': {
          backgroundColor: '#00C853', // Green color when hovered
          color: '#FFFFFF', // White text color when hovered
        },
    },
  }));

  const initialValues = {
    entry: '',
    companyName: '',
    street: '',
    aptSuiteOther: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    phoneExtension: '',
    alternatePhone: '',
    alternatePhoneExtension: '',
    number: '',
    fax: '',
    email: '',
    website: '',
    contact: '',
    notes: '',
    motorCarrierNumber: '',
    taxId: '',
  };

  const validationSchema = Yup.object({
    entry: Yup.string().required('Entry is required'),
    companyName: Yup.string().required('Company Name is required'),

  });

export default function AddressFormPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const theme = useTheme();


  const handleSaveClick = async (values) => {
    setLoading(true);
    try {
    // Logic for saving address details
    dispatch(createAddressAsync(values));
    navigate('/dashboard');
    } catch (error)  {
      // handle any errors if the saving operation failed
    } finally {
    setLoading(false);
    }
  };

  return (
    <div>
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Add Address</Typography>

      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSaveClick}
      >
        {() => (
          <Form>
      <Box className={classes.formContainer}> 
        <Typography variant="caption">
          Select an address to autofill this form
          </Typography>
          <Typography variant="subtitle1">Entry</Typography>
        <Field as={Select} type="text" name="entry" label="Entry" variant="outlined" className={classes.inputField}>
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="shipper">Shipper</MenuItem>
          <MenuItem value="consignee">Consignee</MenuItem>
          <MenuItem value="maintenance_vendor">Maintenance vendor</MenuItem>
          <MenuItem value="fuel_vendor">Fuel vendor</MenuItem>
          <MenuItem value="driver">Driver</MenuItem>
        </Field>
        <ErrorMessage name="entry" component="div" className="error" />
        <Field 
        type="text"
        label="Company Name" 
        name="companyName"
        margin='normal' 
        as={TextField}
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Street" 
        name="street" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Apt" 
        name="apt" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="City" 
        name="city" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="State" 
        name="state" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="ZIP Code" 
        name="zipCode" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Phone Number" 
        name="phoneNumber" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Phone Number Extension" 
        name="phoneNumberExtension" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Alternate Phone" 
        name="alternatePhone" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />

        <Field 
        type="text" 
        label="Alternate Phone Extension" 
        name="alternatePhoneExtension" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />

        <Field 
        type="text" 
        label="Fax" 
        name="fax" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Email" 
        name="email" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Website" 
        name="website" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Contact" 
        name="contact" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Notes" 
        name="notes" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Motor Carrier Number" 
        name="motorCarrierNumber" 
        as={TextField} 
        margin='normal' 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Tax ID (EIN#)" 
        name="taxId" 
        margin='normal' 
        as={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />

        <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        disabled={loading} 
        className={classes.button}>
        {loading ? 'Saving...' : 'Save' }
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
      </Box>
      </Form>
        )}
        </Formik>
    </div>
  );
}
