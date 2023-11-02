import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Radio, RadioGroup, Typography, TextField, Button, Box, MenuItem, Select } from '@material-ui/core';

import { fetchUnitDetailsAsync, saveUnitDataAsync } from '../../redux/slices/unitSlice';



const useStyles = makeStyles((theme) => ({

  title: {
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(4),
  },
  formContainer: {
    padding: theme.spacing(4),
  },
  radioGroup: {
    color: 'green', // Set the color of the radio button to green
    '& .MuiFormControlLabel-label': {
      color: 'green', // Set the color of the label text to green
    },
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

const initialValues = {
            number: '',
            unitType: '',
            ownershipType: '',
            status: 'active',
            vin: '',
            make: '',
            model: '',
            description: '',
            year: '',
            yearPurchased: '',
            purchasePrice: '',
            licensePlateNumber: '',
            licensePlateExpiration: '',
            inspectionStickerExpiration: '',
            insuranceExpiration: '',
            initialLocation: '',
          };

          const validationSchema = Yup.object().shape({
            unitType: Yup.string().required('Required'),
            ownershipType: Yup.string().required('Required'),
            status: Yup.string().required('Required'),
            // Add validation rules for other fields
          })
          

export default function UnitFormPage() {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleOptionalFieldsClick = () => {
    setShowOptionalFields(!showOptionalFields);
  };

  const handleSaveClick = async (values) => {
    try {
      const response = await dispatch(saveUnitDataAsync(values));
       
      if (response.payload && response.payload._id) {
        const newUnitId = response.payload._id.$oid;
        navigate(`/unit/${newUnitId}`);

        dispatch(fetchUnitDetailsAsync(newUnitId));
      } else {
        console.error('Error creating unit:', response.payload.error);
      }
    } catch (error) {
      console.error('Error creating unit:', error);
    }
  
  };

  return (
    <div>
      <InNavBar />
      <Typography variant="h5" className={classes.title}>Add a Unit</Typography>
      <Box className={classes.formContainer}>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSaveClick}
        >
          {() => (
          <Form>
            <Typography variant="subtitle1">Number</Typography>
            <Field name="number" as={TextField} label="Number" variant="outlined" margin='normal' className={classes.inputField} />
        <Typography variant="subtitle1">Unit Type</Typography>
        <Field as={Select} name="unitType" label="Unit Type" variant="outlined" className={classes.inputField}>
          <MenuItem value="truck">Truck</MenuItem>
          <MenuItem value="trailer">Trailer</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </Field>
        <ErrorMessage name="unitType" component="div" className="error" />

        <Typography variant="subtitle1">Ownership Type</Typography>
        <Field as={Select} name="ownershipType" label="Ownership Type" variant="outlined" className={classes.inputField}>
          <MenuItem value="companyOwned">Company Owned</MenuItem>
          <MenuItem value="ownerOperator">Owner Operator</MenuItem>
        </Field>
        <ErrorMessage name="ownershipType" component="div" className="error" />

        <Typography variant="subtitle1">Status</Typography>
        <Field name="status">
          {({ field }) => (
        <RadioGroup className={classes.radioGroup} aria-label="status" name="status" value={field.value} onChange={field.onChange} row variant="outlined">
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel value="inactive" control={<Radio />} label="Inactive" />
        </RadioGroup>
          )}
          </Field>
          <ErrorMessage name="status" component="div" className="error" />

        <Button variant="contained" color="primary" onClick={handleOptionalFieldsClick}>
          {showOptionalFields ? 'Hide Optional Fields' : 'Show Optional Fields'}
        </Button>

        {showOptionalFields && (
          <div>
            <Field name="vin" as={TextField} label="VIN" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="make" as={TextField} label="Make" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="model" as={TextField} label="Model" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="description" as={TextField} label="Description" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="year" as={TextField} label="Year" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="yearPurchased" as={TextField} label="Year Purchased" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="purchasePrice" as={TextField} label="Purchase Price" variant="outlined" margin='normal' className={classes.inputField} />
            <Field name="licensePlateNumber" as={TextField} label="License Plate Number" variant="outlined" margin='normal' className={classes.inputField} />
            <Field type="date" name="licensePlateExpiration" as={TextField} label="License Plate Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <Field type="date" name="inspectionStickerExpiration" as={TextField} label="Inspection Sticker Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <Field type="date" name="insuranceExpiration" as={TextField} label="Insurance Expiration" variant="outlined" margin='normal' className={classes.inputField} />
          </div>
        )}

        <Typography variant="h5">Initial Location</Typography>
        <Field name="initialLocation" as={TextField} label="Initial location" variant="outlined" margin="normal" className={classes.inputField} />
        <Typography variant="body2">
          The initial location of the unit is used to accurately calculate mileage.
        </Typography>
        <Button variant="contained" color="primary">
          Create Initial Location
        </Button>

        <Button type="submit" variant="outlined" color="primary">
          Save
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        </Form>
          )}
        </Formik>
        </Box>
    </div>
  );
}
