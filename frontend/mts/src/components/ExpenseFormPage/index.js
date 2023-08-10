import React from 'react';
import { Typography, Radio, RadioGroup, TextField, Button, FormControl, Select, MenuItem, InputLabel, Box, Link, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import InNavBar from '../../common/Header/InNavBar';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


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
  noteContainer: {
    display: 'flex',
    borderStyle: '1px solid green',
    height: '120px',
    width: '100%',
    padding: theme.spacing(0),
    alignItems: 'center',
    justifyContent: 'space-between',
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

export default function ExpenseFormPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const classes = useStyles();
  const handleCreateExpense = async (values) => {
    try {
      await axios.post('/api/expenses', values);
      navigate('/expenses');
    } catch (error) {
      console.error('Error creating expense:', error);
      // Handle error
    }
  };



  return (
    <div>
      <InNavBar />
      

      <Box className={classes.formContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Add Expense</Typography>
        <Formik
        initialValues={{
          expenseCategory: '',
          amount: '',
          description: '',
          assignToTrip: '',
          expenseDate: '',
          unit: '',
          gallons: '',
          odometer: '',
          fuelVendor: '',
          stateProvince: '',
        }}
        validationSchema={Yup.object({
          expenseCategory: Yup.string().required('Required'),
          amount: Yup.number().required('required'),
          description: Yup.string().required('Required'),
          // other validations
        })}
        onSubmit={handleCreateExpense}
        >
          <Form>
          <Field
            name="expenseCategory"
            as={FormControl}
            halfWidth
            variant="outlined"
            className={classes.inputField}
          >
            <InputLabel>Expense Category</InputLabel>
            <Select>
              <MenuItem value="fuel">Fuel</MenuItem>
              <MenuItem value="reeferFuel">Reefer Fuel</MenuItem>
                {/* ... other options ... */}
            </Select>
            <ErrorMessage name="expenseCategory" component="div" />
          </Field>

          <Button variant="outlined" color="primary" className={classes.button} >
            Add Category
          </Button>

        <Field
          name="Amount"
          as={TextField}
          label="Amount"
          variant="outlined"
          margin='normal'
        
          className={classes.inputField}
          />

        <Field
          name="Description"
          as={TextField}
          label="Description"
          variant="outlined"
          margin='normal'
        
          className={classes.inputField}
          />

          <Typography variant="subtitle1">Assign to Trip</Typography>
          <RadioGroup className={classes.radioGroup} aria-label="assign to trip" name="type" variant="outlined">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />

          </RadioGroup>

        <Field
          name="Expense Date"
          as={TextField}
          label="Expense Date"
          variant="outlined"
          margin='normal'
        
          className={classes.inputField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box className={classes.noteContainer}>
        <Field
        name="Notes"
        as={TextField}
        label="Notes"
        variant="outlined"
        margin="normal"
        multiline
        />
        </Box>

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
          as={TextField}
          label='gallons'
          variant="outlined"
          margin='normal'
        
          className={classes.inputField}
        />

        <Field
          name="Odometer"
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
          name="State/Province"
          as={TextField}
          label='State/Province'
          variant="outlined"
          margin='normal'
        
          className={classes.inputField}
        />

        <Button variant="outlined" color="primary" className={classes.button}>
          Create Expense
        </Button>

        <Link component="button" variant="body2">
          Cancel
        </Link>
        </Form>
        </Formik>
        </Box>
    </div>
  );
}
