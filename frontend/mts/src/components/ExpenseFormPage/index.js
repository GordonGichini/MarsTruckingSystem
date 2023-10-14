import React, { useState, useEffect } from 'react';
import { Typography, Radio, RadioGroup, TextField, Button, FormControl, Select, MenuItem, InputLabel, Box, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
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
        const validationSchema = {
          expenseCategory: Yup.string().required('Expense Category is required'),
          companyName: Yup.string().required('Company Name is required'),


        };

export default function ExpenseFormPage() {
  const navigate = useNavigate();
  const theme = useTheme();
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

  const handleCreateExpense = async (values) => {
    try {
      const response = await api.post('/expenses', values);
      if (response.status === 201) {
        toast.success('Expense created successfully.');
        const newExpenseId = response.data._id;
      navigate(`/expenses/${newExpenseId}`);
      }
    } catch (error) {
      console.error('Error creating expense:', error);
      toast.error('An error occurred while creating the expense. Please try again.');
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
        onSubmit={handleCreateExpense}
        >
          {({ isSubmitting, values, setFieldValue }) => (
          <Form>
               <FormControl variant="outlined" className={classes.inputField}>
                 <InputLabel>Expense Category</InputLabel>
                 <Select
                   name="expenseCategory"
                   value={values.expenseCategory}
                   onChange={(event) => setFieldValue('expenseCategory', event.target.value)}
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
          <Typography variant="h5">Assign to Trip</Typography>
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

          {values.assignToTrip === 'yes' && (
            <FormControl halfWidth variant="outlined" className={classes.inputField}>
              <InputLabel>Select Trip</InputLabel>
              <Select
              name="selectedTrip"
              value={values.selectedTrip}
              onChange={(event) => setFieldValue('selectedTrip', event.target.value)}
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
          name="Unit"
          as={TextField}
          label='unit'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        />

        <Field
          name="Gallons"
          type="number"
          as={TextField}
          label='gallons'
          variant="outlined"
          margin='normal'        
          className={classes.inputField}
        />

        <Field
          name="Odometer"
          type="number"
          as={TextField}
          label='odometer'
          variant="outlined"
          margin='normal'       
          className={classes.inputField}
        />

        <Field
          name="Fuel Vendor"
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
          disabled={isSubmitting}
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
