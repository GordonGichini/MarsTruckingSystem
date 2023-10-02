import React from 'react';
import { Typography, TextField, Button, Box, Grid } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useTheme } from '@mui/material/styles';
import { createPlannedLoadAsync } from '../../redux/slices/plannedLoadsSlice';


const useStyles = makeStyles((theme) => ({
    formContainer: {
     maxWidth: 700,
     margin: '0 auto',
    },
    formSection: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        margin: theme.spacing(2, 0),
    },
    sectionTitle: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(2),
    },
    sectionSubtitle: {
      marginBottom: theme.spacing(1),
    },
    inputField: {
        width: '98%',
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



export default function PlannedLoad() {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();

    const initialValues = {
        customLoadNumber: '',
        customer: '',
        shipper: '',
        pickupDate: '',
        driverInstructions: '',
        bol: '',
        customerRequiredInfo: '',
        weight: '',
        quantity: '',
        notes: '',
        commodity: '',
        consignee: '',
        deliveryDate: '',
        instructions: '',
        primaryFee: '',
        primaryFeeType: 'mileage', // Default to mileage
        fscAmount: '',
        fscAmountType: 'percentage', // Default to percentage
        detention: '',
        lumper: '',
        stopOff: '',
        tarpFee: '',
        invoiceAdvance: ''

    };

     const validationSchema = Yup.object({
        customLoadNumber: Yup.string(),
        customer: Yup.string().required('Customer is required'),
        shipper: Yup.string().required('Required'),
        pickupDate: Yup.date().required('Required'),
        driverInstructions: Yup.string().required('Required'),
        bol: Yup.string().required('Required'),
        customerRequiredInfo: Yup.string().required('Required'),
        weight: Yup.number().required('Required'),
        quantity: Yup.number().required('Required'),
        notes: Yup.string().required('Required'),
        commodity: Yup.string().required('Required'),
        consignee: Yup.string().required('Required'),
        deliveryDate: Yup.date().required('Required'),
        instructions: Yup.string().required('Required'),
        primaryFee: Yup.number().required('Required'),
        primaryFeeType: Yup.string().required('Required'),
        fscAmount: Yup.number().required('Required'),
        fscAmountType: Yup.string().required('Required'),
        detention: Yup.number().required('Required'),
        lumper: Yup.number().required('Required'),
        stopOff: Yup.number().required('Required'),
        tarpFee: Yup.number().required('Required'),
        invoiceAdvance: Yup.number().required('Required')
    });

    const handleSubmit = (values) => {
        // handle form submission
        dispatch(createPlannedLoadAsync(values));
    };

    return (
        <div>
            <InNavBar />
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema} >
                {({ isSubmitting }) => (
                    <Form>
            <Box className={classes.formContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Add Planned Load</Typography>
        <Box className={classes.formSection}>
        
            <Grid container spacing={6}>
                <Grid item xs={6}>
                <Typography variant="subtitle1">Basic Details</Typography>
            <Field
            type="text"
            label="Custom Load Number"
            name="customLoadNumber"
            component={TextField}
            margin='normal'
            variant="outlined"
            className={classes.inputField}
            /> 
            <Typography variant="caption">
                Optional Custom Load number that will override the system generated trip number
            </Typography>            
            <Field
            type="text"
            label="Customer"
            name="customer"
            component={TextField}
            margin='normal'
            variant="outlined"
            className={classes.inputField}
            /> 
            <ErrorMessage name="customer" component="div" /> 
                      
            <Button variant="outlined" component={Link} to = "/add-address" color="primary" className={classes.button}>
                Create customer
            </Button>
            </Grid>
            </Grid>
            </Box>
            </Box>
            <Box className={classes.formContainer}>
                <Typography variant="h6" className={classes.sectionSubtitle}>Stops</Typography>
                <Box className={classes.formSection}>
                        <Grid container spacing={6}>
                            <Grid item xs={6}>
                        <Typography variant="subtitle1">Pickup</Typography>
                        <Field
                        type="text"
                        label="Shipper"
                        name="shipper"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        validate={(value) => {
                            let error;
                            if (!value) {
                                error = 'Shipper is required'
                            }
                            return error;
                        }}
                        /> 
                        <ErrorMessage name="shipper" component="div" />
                        <Button variant="outlined" component={Link} to="/add-address" color="primary">
                            Create Shipper
                            </Button>
                        <Field
                        type="date"
                        label="Pickup date"
                        name="pickupDate"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Instructions"
                        name="instructions"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD drivers can view in mobile app and trip report. (Pick up number, Apt. time, etc.)</Typography>

                        <Field
                        type="text"
                        label="BOL"
                        name="bol"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD driver can view, enter and edit BOL in mobile app</Typography>

                        <Field
                        type="text"
                        label="Customer Required Info (included on invoice)"
                        name="customerRequiredInfo"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">Included on invoice(rate con number, customer tracking number, PO* etc)</Typography>

                        <Field
                        type="number"
                        label="Weight"
                        name="weight"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />
                        <Typography variant="caption">Used to calculate per weight fees. Enter total weight,not tonnes, cwt etc</Typography>

                        <Field
                        type="number"
                        label="Quantity"
                        name="quantity"
                        component={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Notes"
                        name="notes"
                        component={TextField}
                        margin="normal"
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Commodity"
                        name="commodity"
                        component={TextField}
                        margin="normal"
                        className={classes.inputField}
                        variant="outlined"
                        />
                        <Button variant="outlined">Add Another Pickup</Button>
                        </Grid>

                <Grid item xs={6}>
                <Typography variant="subtitle2">Delivery</Typography>
                <Field
                type="text"
                label="Consignee Name"
                name="consigneeName"
                component={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
                <Button variant="outlined" component={Link} to="/add-address" color="primary">
                    Create Consignee
                    </Button> 
                <Field
                type="date"
                label="Delivery Date"
                name="deliveryDate"
                component={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />

                <Field
                type="text"
                label="Instructions"
                name="instructions"
                component={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />

                <Button variant="outlined" color="primary">
                    Add Another Delivery
                </Button>
                </Grid>
                </Grid>
                </Box>               
            {/* Including other input fields and forms here */}
            </Box>

                
                <Box className={classes.formContainer}>
                    <Box className={classes.formSection}>
                    <Typography variant="subtitle2" className={classes.sectionSubtitle}>Fees/Charges</Typography>
                <Field
                type="number"
                label="Primary Fee"
                name="primaryFee"
                component={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
                <Typography variant="caption">Enter Primary Fee, then select Fee Type below</Typography>

                <Field
                type="text"
                label="Primary Fee Type"
                name="primaryFeeType"
                as="select"
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                >
                <option value="mileage">Mileage</option>
                <option value="flat_rate">Flat Rate</option> 
                </Field>

                <Field
                type="number"
                label="Fuel Surcharge Fee"
                name="fscAmount"
                component={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
                <Typography variant="caption">Enter an amount then select an FSC Amount Type below</Typography>

                <Field
                type="text"
                label= "FSC amount Type"
                name="fscAmountType"
                as="select"
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                >
                    <option value="percentage">Percentage of Base Rate</option>
                    <option value="cents_per_mile">Cents Per Mile</option>
                    <option value="percentage_of_fuel_cost">Percentage of Fuel cost</option>
                </Field>
                    <Typography variant="subtitle2">Accessory Fees</Typography>
                    <Field
                    type="number"
                    label="Detention"
                    name="detention"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Lumper"
                    name="lumper"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Stop Off"
                    name="stopOff"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Tarp Fee"
                    name="tarpFee"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Additional"
                    name="additional"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Button variant="outlined" color="primary">
                        Add Additional Fee
                        </Button>
                        <Typography variant="h6">Invoice Advance</Typography>
                    <Field
                    type="number"
                    label="Invoice Advance"
                    name="invoiceAdvance"
                    component={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />
                    </Box>
                    </Box>
                    <Button variant="outlined" type="submit" disabled={isSubmitting}>Save </Button>
                <Button variant="text">cancel</Button>
               </Form>
    )}
               </Formik> 
            </div> 
    );
}

