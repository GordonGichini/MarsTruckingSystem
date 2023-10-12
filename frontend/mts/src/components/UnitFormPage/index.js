import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormControlLabel, Radio, RadioGroup, Typography, Button, Box, MenuItem } from '@material-ui/core';

import { saveUnitDataAsync } from '../../redux/slices/unitSlice';
import { selectUnit } from '../../redux/slices/unitSlice';


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


export default function UnitFormPage() {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showOptionalFields, setShowOptionalFields] = useState(false);

  const handleOptionalFieldsClick = () => {
    setShowOptionalFields(!showOptionalFields);
  };

  const handleSaveClick = (values) => {
    // Logic for saving unit details
    dispatch(saveUnitDataAsync(values));
    console.log(values);
  };

  const savedUnit = useSelector(selectUnit);

  return (
    <div>
      <InNavBar />
      <Typography variant="h5" className={classes.title}>Add a Unit</Typography>
      <Box className={classes.formContainer}>
      <Formik
          initialValues={{
            type: '',
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
            informationStickerExpiration: '',
            insuranceExpiration: '',
            initialLocation: '',
          }}
          validationSchema={Yup.object({
            type: Yup.string().required('Required'),
            ownershipType: Yup.string().required('Required'),
            status: Yup.string().required('Required'),
            // Add validation rules for other fields
          })}
          onSubmit={handleSaveClick}
        >
          <Form>

        <Typography variant="subtitle1">Unit Type</Typography>
        <Field as="select" name="type" label="Type" variant="outlined"className={classes.inputField}>
          <MenuItem value="truck">Truck</MenuItem>
          <MenuItem value="trailer">Trailer</MenuItem>
          <MenuItem value="misc">Misc</MenuItem>
        </Field>
        <ErrorMessage name="type" component="div" className="error" />

        <Typography variant="subtitle1">Ownership Type</Typography>
        <Field as="select" name="ownershipType" label="Ownership Type" variant="outlined"className={classes.inputField}>
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
            <Field label="VIN" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Make" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Model" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Description" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Year" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Year Purchased" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Purchase Price" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="License Plate Number" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="License Plate Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Information Sticker Expiration" variant="outlined" margin='normal' className={classes.inputField} />
            <Field label="Insurance Expiration" variant="outlined" margin='normal' className={classes.inputField} />
          </div>
        )}

        <Typography variant="h5">Initial Location</Typography>
        <Field label="Initial location" variant="outlined" margin="normal" className={classes.inputField} />
        <Typography variant="body2">
          The initial location of the unit is used to accurately calculate mileage.
        </Typography>
        <Button variant="contained" color="primary">
          Create Initial Location
        </Button>

        <Button variant="outlined" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        </Form>
        </Formik>
        </Box>
    </div>
  );
}
