import React from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addAddress } from '../../redux/slices/addressSlice';

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
    companyName: Yup.string().required('Company Name is required'),

  });

export default function AddressFormPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();


  const handleSubmit = (values, { setSubmitting }) => {
    // Logic for saving address details
    dispatch(addAddress(values));
    setSubmitting(false);
  };

  return (
    <div>
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Add Address</Typography>

      <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>

      <Box className={classes.formContainer}> 
        <Field 
        type="text"
        label="Search"
        name="search" 
        component={TextField}
        variant="outlined" 
        className={classes.search} 
        />
        <Typography variant="caption">
          Select an address to autofill this form
          </Typography>
        <Field 
        type="text"
        label="Company Name" 
        name="companyName"
        margin='normal' 
        component={TextField}
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Street" 
        name="street" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Apt/Suite/Other" 
        name="apt/suite/other" 
        margin='normal' 
        component={TextField} 
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
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="ZIP Code" 
        name="zipCode" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Phone Number" 
        name="phoneNumber" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Phone Extension Number" 
        name="phoneExtensionNumber" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Alternate Phone" 
        name="alternatePhone" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />

        <Field 
        type="text" 
        label="Alternate Phone Extension" 
        name="alternatePhoneExtension" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        
        <Field 
        type="text" 
        label="Number" 
        name="number" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Fax" 
        name="fax" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Email" 
        name="email" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Website" 
        name="website" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Contact" 
        name="contact" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Notes" 
        name="notes" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Motor Carrier Number" 
        name="motorCarrierNumber" 
        component={TextField} 
        margin='normal' 
        variant="outlined" 
        className={classes.inputField} 
        />
        <Field 
        type="text" 
        label="Tax ID (EIN#)" 
        name="taxId(EIN#)" 
        margin='normal' 
        component={TextField} 
        variant="outlined" 
        className={classes.inputField} 
        />

        <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        disabled={isSubmitting} 
        className={classes.button}>
          Save
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
