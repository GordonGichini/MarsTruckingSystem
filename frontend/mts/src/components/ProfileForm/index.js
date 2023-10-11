import React from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { saveCompanyDataAsync } from '../../redux/slices/companySlice';


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
    marginLeft: theme.spacing(2),
  },
  search: {
    width: '50%',
    justifyContent: 'center',
    marginLeft: theme.spacing(4),
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


  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company Name is required'),
    // validation rules for other fields here
  })


export default function ProfileForm() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleSaveClick = (values) => {
    // Handle form submission
    // Logic for saving address details
    dispatch(saveCompanyDataAsync(values));
    console.log(values);
  };

  return (
    <div>
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Company Name</Typography>
      <Box mt={2} p={1} border="1px solid green" sx={{ m: "20px", height: 'auto' }}>
      <Typography variant="body1">Notice: Please fill in your company details below. Your city and state are required. This information will appear on your invoices and be used to set the initial location for your units.</Typography>
      </Box>
      <Typography variant="h6" className={classes.sectionSubtitle}>Editing Company Address</Typography>
      <TextField label="Search" variant="outlined" className={classes.search} />
      <Typography variant="caption">Select an address to autofill this form</Typography>

      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSaveClick}
      >
        {() => (
          <Form>
      <Box className={classes.formContainer}>   
        <Field name="companyName" as={TextField} label="Company Name" margin='normal' variant="outlined" className={classes.inputField} />
        <ErrorMessage name="companyName" component="div" className="error" />
        <Field name="street" as={TextField} label="Street" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="aptSuiteOther" as={TextField} label="Apt/Suite/Other" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="city" as={TextField} label="City" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="state" as={TextField} label="State" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="zipCode" as={TextField} label="ZIP Code" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="phoneNumber" as={TextField} label="Phone Number" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="phoneExtensionNumber" as={TextField} label="Phone Extension Number" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="alternatePhone" as={TextField} label="Alternate Phone" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="alternatePhoneExtension" as={TextField} label="Alternate Phone Extension" margin='normal' variant="outlined" className={classes.inputField} />
        
        <Field name="number" as={TextField} label="Number" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="fax" as={TextField} label="Fax" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="email" as={TextField} label="Email" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="website" as={TextField} label="Website" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="contact" as={TextField} label="Contact" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="notes" as={TextField} label="Notes" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="motorCarrierNumber" as={TextField} label="Motor Carrier Number" margin='normal' variant="outlined" className={classes.inputField} />
        <Field name="taxId" as={TextField} label="Tax ID (EIN#)" margin='normal' variant="outlined" className={classes.inputField} />

        <Button type="submit" variant="contained" color="primary">
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
