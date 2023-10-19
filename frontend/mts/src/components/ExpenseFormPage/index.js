import React, { useState, useEffect } from 'react';
import { Typography, Radio, RadioGroup, TextField, Button, FormControl, Select, MenuItem, InputLabel, Box, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { saveExpenseDataAsync } from '../../redux/slices/expenseSlice';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import api from '../../api';
import { toast } from 'react-toastify';


const useStyles = makeStyles((theme) => ({
  formContainer: {
    maxWidth: 700,
    margin: '0 auto'
  },
  radioGroup: {
    color: 'green', // Set the color of the radio button to green
    '& .MuiFormControlLabel-label': {
      color: 'green', // Set the color of the label text to green
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(12),
    marginRight: theme.spacing(6),
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
  inputField: {
    width: '78%',
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
          expenseCategory: '',
          amount: '',
          description: '',
          assignToTrip: 'no',
          selectedTrip: '',
          expenseDate: '',
          unit: '',
          gallons: '',
          odometer: '',
          fuelVendor: '',
          state: '',
        };

const validationSchema = Yup.object({
  // validations 

});
export default function ExpenseFormPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const state = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  //state for handling API responses and errors
  const [apiError, setApiError] = useState(null);
  const [availableTrips, setAvailableTrips] = useState([]);

  useEffect(() => {
    //fetching available trips when the component mounts
    const fetchAvailableTrips = async () => {
      try {
        const response = await axios.get('/trips');
        if (response.status === 200) {
          setAvailableTrips(response.data);
        }
      } catch (error) {
        console.error('Error fetching available trips:', error);
      }
    };

    fetchAvailableTrips();
  }, []); //empty dependency array ensures this effect runs only once on mount

  const handleSaveClick = async (values) => {
    try {
      const response = await dispatch(saveExpenseDataAsync(values));

      if (response.payload && response.payload._id) {
        const newExpenseId = response.payload._id;
        navigate(`/expense-details/${newExpenseId}`);
      }
    } catch (error) {
      console.error('Error creating expense:', error);
    }
  };

  return (
    <div>
      <InNavBar />
      <Box className={classes.formContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Add Expense</Typography>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSaveClick}>
          {(formik) => (
          <Form>
               <FormControl variant="outlined" className={classes.inputField}>
                 <InputLabel>Expense Category</InputLabel>
                 <Select
                   name="expenseCategory"
                   value={formik.values.expenseCategory}
                   onChange={formik.handleChange}
                 >
                   <MenuItem value="fuel">Fuel</MenuItem>
                   <MenuItem value="reeferFuel">Reefer Fuel</MenuItem>
                   {/* ... other options ... */}
                 </Select>
                 <ErrorMessage name="expenseCategory" component="div" className="error-message" />
               </FormControl>

          <Button variant="outlined" color="primary" className={classes.button} >
            Add Category
          </Button>

        <Field
          name="amount"
          as={TextField}
          type="number"
          label="Amount"
          variant="outlined"
          margin='normal'       
          className={classes.inputField}
          />

        <Field
          name="description"
          as={TextField}
          label="Description"
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
          />
          <Typography variant="h6">Assign to Trip</Typography>
          <Field
          name="assignToTrip"
          as={RadioGroup}
          label="Assign to Trip"
          className={classes.radioGroup}
          aria-label="assign to trip"
          variant="outlined"
          >
            <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Yes"
            />
            <FormControlLabel
            value="no"
            control={<Radio />}
            label="No"
            />
          </Field>

          {formik.values.assignToTrip === 'yes' && (
            <FormControl halfWidth variant="outlined" className={classes.inputField}>
              <InputLabel>Select Trip</InputLabel>
              <Select
              name="selectedTrip"
              value={formik.values.selectedTrip}
              onChange={formik.handleChange}
              >
                <MenuItem value="">Select a Trip</MenuItem>
                {availableTrips.map((trip) => (
                  <MenuItem key={trip.id} value={trip.id}>
                    {trip.name}
                  </MenuItem>
                ))}
              </Select>
              <ErrorMessage name="selectedTrip" component="div" className="error-message" />
            </FormControl>
          )}

        <Field
          name="expenseDate"
          type="date"
          as={TextField}
          label="expenseDate"
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Field
          name="unit"
          as={TextField}
          label='unit'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        />

        <Field
          name="gallons"
          type="number"
          as={TextField}
          label='gallons'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        />

        <Field
          name="odometer"
          type="number"
          as={TextField}
          label='odometer'
          variant="outlined"
          margin='normal'       
          className={classes.inputField}
        />

        <Field
          name="fuelVendor"
          as={TextField}
          label='fuelVendor'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        />
         <Button variant="outlined" className={classes.button} color="primary">
            Add Fuel Vendor
          </Button>

        <Field
          name="state"
          as='select'
          label='State'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        >
          <option value="" disabled>
            Select state
          </option>
          {state.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </Field>
        <ErrorMessage name="state" component="div" className="error-message" />

        {apiError && <div className={classes.error}>{apiError}</div>}

        <Button
         variant="outlined"
          color="primary" 
          className={classes.button}
          type="submit"
          >
          Create Expense
        </Button>

        <Button type="button" variant="text">
          Cancel
        </Button>
        </Form>
          )}
        </Formik>
        </Box>
    </div>
  );
}
