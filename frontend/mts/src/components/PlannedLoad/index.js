import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

    const initialValues = {
        customLoadNumber: '',
        customer: '',
        shipper: '',
        pickupDate: '',
        instructions: '',
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
        additional: '',
        invoiceAdvance: '',
        pickups: [{}],
        deliveries: [{}],

    };

     const validationSchema = Yup.object().shape({
        customLoadNumber: Yup.string(),
        customer: Yup.string().required('Customer is required'),
        shipper: Yup.string().required('Shipper is required'),
        pickupDate: Yup.date().required('Pickup date is required'),
        instructions: Yup.string().required('Driver instructions is required'),
        bol: Yup.string().required('BOL is required'),
        customerRequiredInfo: Yup.string().required('Customer required info is required'),
        weight: Yup.number().required('weight is required'),
        quantity: Yup.number().required('quantity is required'),
        notes: Yup.string(),
        commodity: Yup.string(),
        consignee: Yup.string().required('Consignee is required'),
        deliveryDate: Yup.date().required('Delivery date is required'),
        instructions: Yup.string().required('Instructions are required'),
        primaryFee: Yup.number().required('Primary fee is required'),
        primaryFeeType: Yup.string().required('Primary fee type is required'),
        fscAmount: Yup.number().required('fsc amount is required'),
        fscAmountType: Yup.string().required('fsc amount type is required'),
        detention: Yup.number().required('Detention is required'),
        lumper: Yup.number().required('Lumper is required'),
        stopOff: Yup.number().required('Stop Off is required'),
        tarpFee: Yup.number().required('Tarp fee is required'),
        invoiceAdvance: Yup.number().required('Invoice advance is required')
    });



export default function PlannedLoad() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const theme = useTheme();

    const [pickups, setPickups] = useState(initialValues.pickups);
    const [deliveries, setDeliveries] = useState(initialValues.deliveries);


    const handleSaveClick = async (values) => {
        setLoading(true);
        try {
        // dispatch the action to create a planned load
        dispatch(createPlannedLoadAsync(values));
        navigate('/dashboard');

            alert('Planned load created successfully!');
        } catch (error) {
        alert('Error creating planned load. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const addPickup = () => {
        setPickups([...pickups, {}]);
    };

    const removePickup = (index) => {
        const newPickups = [...pickups];
        newPickups.splice(index, 1);
        setPickups(newPickups);
    };

    const addDelivery = () => {
        setDeliveries([...deliveries, {}]);
    };

    const removeDelivery = (index) => {
        const newDeliveries = [...deliveries];
        newDeliveries.splice(index, 1);
        setDeliveries(newDeliveries);
    };

    return (
        <div>
            <InNavBar />
            <Formik
             initialValues={initialValues} 
             onSubmit={handleSaveClick} 
             validationSchema={validationSchema} 
             >
                {() => (
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
            as={TextField}
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
            as={TextField}
            margin='normal'
            variant="outlined"
            className={classes.inputField}
            /> 
                      
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
                        {pickups.map((pickup, index) => (
                     <div key={index}>
                        <Field
                        type="text"
                        label="Shipper"
                        name={`pickups.${index}.shipper`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        /> 
                        <Button variant="outlined" component={Link} to="/add-address" color="primary">
                            Create Shipper
                            </Button>
                        <Field
                        type="date"
                        label="Pickup date"
                        name={`pickups.${index}.pickupDate`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Instructions"
                        name={`pickups.${index}.instructions`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD drivers can view in mobile app and trip report. (Pick up number, Apt. time, etc.)</Typography>

                        <Field
                        type="text"
                        label="BOL"
                        name={`pickups.${index}.bol`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD driver can view, enter and edit BOL in mobile app</Typography>

                        <Field
                        type="text"
                        label="Customer Required Info (included on invoice)"
                        name={`pickups.${index}.customerRequiredInfo`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">Included on invoice(rate con number, customer tracking number, PO* etc)</Typography>

                        <Field
                        type="number"
                        label="Weight"
                        name={`pickups.${index}.weight`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />
                        <Typography variant="caption">Used to calculate per weight fees. Enter total weight,not tonnes, cwt etc</Typography>

                        <Field
                        type="number"
                        label="Quantity"
                        name={`pickups.${index}.quantity`}
                        as={TextField}
                        margin='normal'
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Notes"
                        name={`pickups.${index}.notes`}
                        as={TextField}
                        margin="normal"
                        className={classes.inputField}
                        variant="outlined"
                        />

                        <Field
                        type="text"
                        label="Commodity"
                        name={`pickups.${index}.commodity`}
                        as={TextField}
                        margin="normal"
                        className={classes.inputField}
                        variant="outlined"
                        />
                        
                        <Button variant="outlined" onClick={() => removePickup(index)}>
                            Remove Pickup
                        </Button>
                        </div>
                        ))}
                       <Button 
                        variant="outlined" 
                        onClick={addPickup}>
                            Add Another Pickup
                        </Button>
                        </Grid>
                <Grid item xs={6}>
                <Typography variant="subtitle2">Delivery</Typography>
                {deliveries.map((delivery, index) => (
                 <div key={index}>
                <Field
                type="text"
                label="Consignee"
                name={`deliveries.${index}.consignee`}
                as={TextField}
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
                name={`deliveries.${index}.deliveryDate`}
                as={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />

                <Field
                type="text"
                label="Instructions"
                name={`deliveries.${index}.instructions`}
                as={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
              
                <Button variant="outlined" onClick={() => removeDelivery(index)}>
                    Remove Delivery
                </Button>
                </div>
                ))}
                     <Button 
                variant="outlined" 
                color="primary" 
                onClick={addDelivery}
                >
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
                as={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
                <Typography variant="caption">Enter Primary Fee, then select Fee Type below</Typography>

                <Field
                type="text"
                label="Primary Fee Type"
                name="primaryFeeType"
                as={Select}
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
                as={TextField}
                margin='normal'
                className={classes.inputField}
                variant="outlined"
                />
                <Typography variant="caption">Enter an amount then select an FSC Amount Type below</Typography>

                <Field
                type="text"
                label= "FSC amount Type"
                name="fscAmountType"
                as={Select}
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
                    as={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Lumper"
                    name="lumper"
                    as={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Stop Off"
                    name="stopOff"
                    as={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Tarp Fee"
                    name="tarpFee"
                    as={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />

                    <Field
                    type="number"
                    label="Additional"
                    name="additional"
                    as={TextField}
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
                    as={TextField}
                    margin='normal'
                    className={classes.inputField}
                    variant="outlined"
                    />
                    </Box>
                    </Box>
                    <Button variant="outlined" type="submit" color="primary" disabled={loading} className={classes.button}>
                    {loading ? 'Saving...' : 'Save' }
                    </Button>
                <Button variant="text">cancel</Button>
            </Form>
    )}
            </Formik> 
            </div> 
    );
}


