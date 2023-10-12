import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InNavBar from '../../common/Header/InNavBar';
import { Paper, Typography, TextField, Button, Box } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveDriverDataAsync } from '../../redux/slices/driverSlice';
import { selectDriver } from '../../redux/slices/driverSlice';


const useStyles = makeStyles((theme) => ({
 
  formContainer: {
    padding: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  inputField: {
    width: '60%',
    margin: theme.spacing(1, 0),
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
}));

export default function DriverFormPage() {
  const [showEmergencyContact, setShowEmergencyContact] = useState(false);
  const dispatch = useDispatch();
  const savedDriver = useSelector(selectDriver);

  const handleEmergencyContactClick = () => {
    setShowEmergencyContact(!showEmergencyContact);
  };

  const handleSaveClick = (values) => {
    dispatch(saveDriverDataAsync(values));
    console.log(values);
  };
  const classes = useStyles();

  return (
    <div>
      <InNavBar />
        <Paper elevation={1} className={classes.formContainer}>
      <Typography variant="h6" className={classes.title}>Add Driver</Typography>
      <Formik
      initialValues={{
        // Define your initial form values
      }}
      validationSchema={Yup.object({
        // Define validation schema for your form fields
      })}
      onSubmit={handleSaveClick}
      >
      <Form className={classes.formContainer}>

      <Box my={2}>
        <Field type="text" name="firstName" as={TextField} label="First Name" variant="outlined" margin='normal'className={classes.inputField}/>
        <ErrorMessage name="firstName" component="div" className="error" />
        <Field type="text" name="lastName" as={TextField} label="Last Name" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="street" as={TextField} label="Street" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="city" as={TextField} label="City" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="state" as={TextField} label="State" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="zipCode" as={TextField} label="ZIP Code" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="phone" as={TextField} label="Phone" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="alternatePhone" as={TextField} label="Alternate Phone" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="fax" as={TextField} label="Fax" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="email" as={TextField} label="Email" margin='normal' variant="outlined" className={classes.inputField} />
        <Field type="text" name="defaultPaymentType" as={TextField} label="Default Payment Type" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="licenseNumber" as={TextField} label="License Number" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="licenseExpiration" as={TextField} label="License Expiration" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="licenseIssuingState" as={TextField} label="License Issuing State/Jurisdiction" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="medicalCardRenewal" as={TextField} label="Medical Card Renewal" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="hireDate" as={TextField} label="Hire Date" variant="outlined" margin='normal'className={classes.inputField} />
        <Field type="text" name="terminationDate" as={TextField} label="Termination Date" variant="outlined" margin='normal'className={classes.inputField} />

        <Button variant="contained" color="primary" onClick={handleEmergencyContactClick}>
          {showEmergencyContact ? 'Hide Emergency Contact' : 'Show Emergency Contact'}
        </Button>

        {showEmergencyContact && (
          <div>
            <Field type="text" name="contactName" as={TextField} label="Contact Name" variant="outlined" margin='normal'className={classes.inputField} />
            <Field type="text" name="contactPhone" as={TextField} label="Contact Phone" variant="outlined" margin='normal'className={classes.inputField} />
            <Field type="text" name="contactStreet" as={TextField} label="Contact Street" variant="outlined" margin='normal'className={classes.inputField} />
            <Field type="text" name="contactCity" as={TextField} label="Contact City" variant="outlined" margin='normal'className={classes.inputField} />
            <Field type="text" name="contactState" as={TextField} label="Contact State" variant="outlined" margin='normal'className={classes.inputField} />
            <Field type="text" name="contactZipCode" as={TextField} label="Contact ZIP Code" variant="outlined" margin='normal'className={classes.inputField} />
          </div>
        )}

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      </Box>
      </Form>
      </Formik>
      </Paper>
    </div>
  );
}
