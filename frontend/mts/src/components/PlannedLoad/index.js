import React from 'react';
import { Typography, TextField, Button, Box, Grid } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


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
    // Defining state variables for capturing form inputs
    const [customLoadNumber, setCustomLoadNumber] = React.useState('');
    const [customer, setCustomer] = React.useState('');

     // Basic details form state
    const handleCustomLoadNumberChange = (event) => {
        setCustomLoadNumber(event.target.value);
    };

    const handleCustomerChange = (event) => {
        setCustomer(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    }; 

    // Pickup form state
    const [shipperName, setShipperName] = React.useState('');
    const [pickupDate, setPickupDate] = React.useState('');
    const [instructions, setInstructions] = React.useState('');
    const [bol, setBol] = React.useState('');
    const [customerRequiredInfo, setCustomerRequiredInfo] = React.useState('');
    const [weight, setWeight] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const [commodity, setCommodity] = React.useState('');

    const handleShipperNameChange = (event) => {
        setShipperName(event.target.value); 
    };

    const handlePickupDateChange = (event) => {
        setPickupDate(event.target.value);
    };

    const handleInstructionsChange = (event) => {
      setInstructions(event.target.value); 
};

    const handleBolChange = (event) => {
        setBol(event.target.value);
    };

    const handleCustomerRequiredInfoChange = (event) => {
        setCustomerRequiredInfo(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }; 

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    };

    const handleCommodityChange = (event) => {
        setCommodity(event.target.value);
    };

    //Delivery state
    const [consigneeName, setConsigneeName] = React.useState('');
    const [deliveryDate, setDeliveryDate] = React.useState('');
    const [instructions11, setInstructions11] = React.useState('');

    const handleConsigneeNameChange = (event) => {
        setConsigneeName(event.target.value);
    };

    const handleDeliveryDateChange = (event) => {
        setDeliveryDate(event.target.value);
    };

    const handleInstructions11Change = (event) => {
        setInstructions11(event.target.value);
    }; 

    //Fee/Charge state
    const [primaryFee, setPrimaryFee] = React.useState('');
    const [primaryFeeType, setPrimaryFeeType] = React.useState('');
    const [fscAmount, setFscAmount] = React.useState('');
    const [fscAmountType, setFscAmountType] = React.useState('');
    const [detention, setDetention] = React.useState('');
    const [lumper, setLumper] = React.useState('');
    const [stopOff, setStopOff] = React.useState('');
    const [tarpFee, setTarpFee] = React.useState('');
    const [additional, setAdditional] = React.useState('');
    const [invoiceAdvance, setInvoiceAdvance] = React.useState('');
    const [addAnotherDelivery, setAddAnotherDelivery] = React.useState('');
    const [addAdditionalFee, setAddAdditionalFee] = React.useState('');

    const handlePrimaryFeeChange = (event) => {
        setPrimaryFee(event.target.value);
    };

    const handlePrimaryFeeTypeChange = (event) => {
        setPrimaryFeeType(event.target.value);
    };

    const handleFscAmountChange = (event) => {
        setFscAmount(event.target.value);
    }; 

    const handleFscAmountTypeChange = (event) => {
        setFscAmountType(event.target.value);
    };

    const handleDetentionChange = (event) => {
        setDetention(event.target.value);
    };

    const handleLumperChange = (event) => {
        setLumper(event.target.value);
    };

    const handleStopOffChange = (event) => {
        setStopOff(event.target.value);
    };

    const handleTarpFeeChange = (event) => {
        setTarpFee(event.target.value);
    };

    const handleAdditionalChange = (event) => {
        setAdditional(event.target.value);
    };

    const handleInvoiceAdvanceChange = (event) => {
        setInvoiceAdvance(event.target.value);
    };

    const handleAddAnotherDeliveryChange = (event) => {
        setAddAnotherDelivery(event.target.value);
   
   
    };

    const handleAddAdditionalFeeChange = (event) => {
        setAddAdditionalFee(event.target.value);
    };


    return (
        <div>
            <InNavBar />
            <Box className={classes.formContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Add Planned Load</Typography>
        <Box className={classes.formSection}>
        
            <Grid container spacing={6}>
                <Grid item xs={6}>
                <Typography variant="subtitle1">Basic Details</Typography>
            <TextField
            label="Custom Load Number"
            value={customLoadNumber}
            margin='normal'
            onChange={handleCustomLoadNumberChange}
            variant="outlined"
            className={classes.inputField}
            /> 
            <Typography variant="caption">
                Optional Custom Load number that will override the system generated trip number
            </Typography>            
            <TextField
            label="Customer"
            value={customer}
            margin='normal'
            onChange={handleCustomerChange}
            variant="outlined"
            className={classes.inputField}
            />  
                      
            <Button variant="outlined" color="primary" onClick={handleCustomerChange}
            className={classes.button}>
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
                        <TextField
                        label="Shipper"
                        value={shipperName}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleShipperNameChange}
                        variant="outlined"
                        /> 
                        <Button variant="outlined" color="primary" onClick={handleShipperNameChange}>
                            Create Shipper
                            </Button>
                        <TextField
                        label="Pickup date"
                        value={pickupDate}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handlePickupDateChange}
                        variant="outlined"
                        />

                        <TextField
                        label="Instructions"
                        value={instructions}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleInstructionsChange}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD drivers can view in mobile app and trip report. (Pick up number, Apt. time, etc.)</Typography>

                        <TextField
                        label="BOL"
                        value={bol}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleBolChange}
                        variant="outlined"
                        />
                        <Typography variant="caption">ELD driver can view, enter and edit BOL in mobile app</Typography>

                        <TextField
                        label="Customer Required Info (included on invoice)"
                        value={customerRequiredInfo}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleCustomerRequiredInfoChange}
                        multiline
                        variant="outlined"
                        />
                        <Typography variant="caption">Included on invoice(rate con number, customer tracking number, PO* etc)</Typography>

                        <TextField
                        label="Weight"
                        value={weight}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleWeightChange}
                        variant="outlined"
                        />
                        <Typography variant="caption">Used to calculate per weight fees. Enter total weight,not tonnes, cwt etc</Typography>

                        <TextField
                        label="Quantity"
                        value={quantity}
                        margin='normal'
                        className={classes.inputField}
                        onChange={handleQuantityChange}
                        variant="outlined"
                        />

                        <TextField
                        label="Notes"
                        value={notes}
                        margin="normal"
                        className={classes.inputField}
                        onChange={handleNotesChange}
                        variant="outlined"
                        />

                        <TextField
                        label="Commodity"
                        value={commodity}
                        margin="normal"
                        className={classes.inputField}
                        onChange={handleCommodityChange}
                        variant="outlined"
                        />
                        <Button variant="outlined">Add Another Pickup</Button>
                        </Grid>

                <Grid item xs={6}>
                <Typography variant="subtitle2">Delivery</Typography>
                <TextField
                label="Consignee Name"
                value={consigneeName}
                margin='normal'
                className={classes.inputField}
                onChange={handleConsigneeNameChange}
                variant="outlined"
                />
                <Button variant="outlined" color="primary" onClick={handleConsigneeNameChange}>
                    Create Consignee
                    </Button> 
                <TextField
                label="Delivery Date"
                value={deliveryDate}
                margin='normal'
                className={classes.inputField}
                onChange={handleDeliveryDateChange}
                variant="outlined"
                />

                <TextField
                label="Instructions"
                value={instructions11}
                margin='normal'
                className={classes.inputField}
                onChange={handleInstructions11Change}
                variant="outlined"
                />

                <Button variant="outlined" color="primary" onClick={handleAddAnotherDeliveryChange}>
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
                <TextField
                label="Primary Fee"
                value={primaryFee}
                margin='normal'
                className={classes.inputField}
                onChange={handlePrimaryFeeChange}
                variant="outlined"
                />
                <Typography variant="caption">Enter Primary Fee, then select Fee Type below</Typography>

                <TextField
                label="Primary Fee Type"
                value={primaryFeeType}
                margin='normal'
                className={classes.inputField}
                onChange={handlePrimaryFeeTypeChange}
                variant="outlined"
                />

                <TextField
                label="Fuel Surcharge Fee"
                value={fscAmount}
                margin='normal'
                className={classes.inputField}
                onChange={handleFscAmountChange}
                variant="outlined"
                />
                <Typography variant="caption">Enter an amount then select an FSC Amount Type below</Typography>

                <TextField
                label= "FSC amount Type"
                value={fscAmountType}
                margin='normal'
                className={classes.inputField}
                onChange={handleFscAmountTypeChange}
                variant="outlined"
                /> 
                    <Typography variant="subtitle2">Accessory Fees</Typography>
                    <TextField
                    label="Detention"
                    value={detention}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleDetentionChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Lumper"
                    value={lumper}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleLumperChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Stop Off"
                    value={stopOff}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleStopOffChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Tarp Fee"
                    value={tarpFee}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleTarpFeeChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Additional"
                    value={additional}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleAdditionalChange}
                    variant="outlined"
                    />

                    <Button variant="outlined" color="primary" onClick={handleAddAdditionalFeeChange}>
                        Add Additional Fee
                        </Button>
                        <Typography variant="h6">Invoice Advance</Typography>
                    <TextField
                    label="Invoice Advance"
                    value={invoiceAdvance}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleInvoiceAdvanceChange}
                    variant="outlined"
                    />
                    </Box>
                    </Box>
                    <Button variant="outlined">Save </Button>
                <Button variant="text">cancel</Button>
                
            </div> 
    );
}

