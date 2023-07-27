import React from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    formContainer: {
      maxWidth: 600,
      margin: 'auto',
      padding: theme.spacing(2),
    },
    sectionTitle: {
      marginBottom: theme.spacing(2),
    },
    sectionSubtitle: {
      marginBottom: theme.spacing(1),
    },
    inputField: {
      marginBottom: theme.spacing(2),
    },
    button: {
        marginRight: theme.spacing(2),
      },
    }));



export default function DispatchFormPage() {
    const classes = useStyles();
    const theme = useTheme();
    // Defining state variables for capturing form inputs
    const [customTripNumber, setCustomTripNumber] = React.useState('');
    const [driverName, setDriverName] = React.useState('');
    const [driverPay, setDriverPay] = React.useState('');
    const [driverAdvance, setDriverAdvance] = React.useState('');
    const [truck, setTruck] = React.useState('');
    const [trailer, setTrailer] = React.useState('');
    const [odometer, setOdometer] = React.useState('');
    const [customer, setCustomer] = React.useState('');

     // Basic details form state
    const handleCustomTripNumberChange = (event) => {
        setCustomTripNumber(event.target.value);
    };

    const handleDriverNameChange = (event) => {
        setDriverName(event.target.value);
    };

    const handleDriverPayChange = (event) => {
        setDriverPay(event.target.value);
    }; 

    const handleDriverAdvanceChange = (event) => {
        setDriverAdvance(event.target.value);
    };

    const handleAddDriverClick = () => {
        // Perform logic for adding a driver
        // can access the captured input values here
    };

    const handleTruckChange = (event) => {
        setTruck(event.target.value);
    };

    const handleTrailerChange = (event) => {
        setTrailer(event.target.value);
    };

    const handleOdometerChange = (event) => {
        setOdometer(event.target.value);
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

    // Routing Stop form state
    const [routingStopName, setRoutingStopName] = React.useState('');
    const [routingStopDate, setRoutingStopDate] = React.useState('');
    const [instructions1, setInstructions1] = React.useState('');
    const [notes, setNotes] = React.useState('');

    const handleRoutingStopNameChange = (event) => {
        setRoutingStopName(event.target.value);
    };

    const handleRoutingStopDateChange = (event) => {
        setRoutingStopDate(event.target.value);
    };

    const handleInstructions1Change = (event) => {
        setInstructions1(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
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
        <Typography variant="h6" className={classes.sectionTitle}>Add Dispatch</Typography>

        <form onSubmit={handleFormSubmit}>
            <Box mb={4}>
                <Typography variant="subtitle1">Basic Details</Typography>
            <TextField
            label="Custom Trip Number"
            value={customTripNumber}
            onChange={handleCustomTripNumberChange}
            fullWidth
            className={classes.inputField}
            /> 

            <TextField
            label="Driver Name"
            value={driverName}
            onChange={handleDriverNameChange}
            fullWidth
            className={classes.inputField}
            /> 

            <Button 
            variant="contained" 
            color="primary" 
            onClick={handleDriverNameChange}
            component={Link}
            to="/"
            >
                Create Driver
            </Button>

            <TextField
            label="Driver Pay"
            value={driverPay}
            onChange={handleDriverPayChange}
            fullWidth
            className={classes.inputField}
            /> 

            <TextField
            label="Driver Advance"
            value={driverAdvance}
            onChange={handleDriverAdvanceChange}
            fullWidth
            className={classes.inputField}
            />

            <Button variant="contained" color="primary" onClick={handleAddDriverClick}>
                Add Team Driver
            </Button> 

            <TextField
            label="Truck"
            value={truck}
            onChange={handleTruckChange} 
            fullWidth
            className={classes.inputField}
            /> 

            <Button variant="contained" color="primary" onClick={handleTruckChange}>
                Create Truck 
            </Button>

            <TextField
            label="Trailer"
            value={trailer}
            onChange={handleTrailerChange}
            fullWidth
            className={classes.inputField}
            />

            <Button variant="contained" color="primary" onClick={handleTrailerChange}>
                    Create Trailer
            </Button> 
            
            <TextField
            label="Odometer"
            value={odometer}
            onChange={handleOdometerChange} 
            fullWidth
            className={classes.inputField}
            />

            <TextField
            label="Customer"
            value={customer}
            onChange={handleCustomerChange}
            fullWidth
            className={classes.inputField}
            /> 

            <Button variant="contained" color="primary" onClick={handleCustomerChange}>
                Create customer
            </Button> 
            </Box> 

            <Box mb={4}>
                <Typography variant="subtitle1" className={classes.sectionSubtitle}>Stops</Typography>
                <Box display="flex" mb={2}>
                    <Box flex={1} mr={2}>
                        <Typography variant="subtitle2">Pickup</Typography>
                        <TextField
                        label="Shipper"
                        value={shipperName}
                        onChange={handleShipperNameChange}
                        /> 
                        <Button variant="contained" color="primary" onClick={handleShipperNameChange}>
                            Create Shipper
                            </Button>
                        <TextField
                        label="Pickup date"
                        value={pickupDate}
                        onChange={handlePickupDateChange}
                        />

                        <TextField
                        label="Instructions"
                        value={instructions}
                        onChange={handleInstructionsChange}
                        />

                        <TextField
                        label="BOL"
                        value={bol}
                        onChange={handleBolChange}
                        />

                        <TextField
                        label="Customer Required Info (included on invoice)"
                        value={customerRequiredInfo}
                        onChange={handleCustomerRequiredInfoChange}
                        />

                        <TextField
                        label="Weight"
                        value={weight}
                        onChange={handleWeightChange}
                        />

                        <TextField
                        label="Quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        />
            </Box>

            <Box flex={1}>
                <Typography variant="subtitle2">Routing Stop (Optional)</Typography>
                <TextField
                label="Routing Stop"
                value={routingStopName}
                onChange={handleRoutingStopNameChange}
                />
                <Button variant="contained" color="primary" onClick={handleRoutingStopNameChange}>
                    Create Routing stop
                    </Button>

                    <TextField
                    label="Routing Stop Date"
                    value={routingStopDate}
                    onChange={handleRoutingStopDateChange}
                    />

                    <TextField
                    label="Instructions"
                    value={instructions}
                    onChange={handleInstructionsChange}
                    />

                    <TextField
                    label="Notes"
                    value={notes}
                    onChange={handleNotesChange}
                    />
            </Box> 
            </Box> 

            <Box my={2}>
                <Typography variant="subtitle2">Delivery</Typography>
                <TextField
                label="Consignee Name"
                value={consigneeName}
                onChange={handleConsigneeNameChange}
                />
                <Button variant="contained" color="primary" onClick={handleConsigneeNameChange}>
                    Create Consignee
                    </Button> 
                <TextField
                label="Delivery Date"
                value={deliveryDate}
                onChange={handleDeliveryDateChange}
                />

                <TextField
                label="Instructions"
                value={instructions11}
                onChange={handleInstructions11Change}
                />

                <Button variant="contained" color="primary" onClick={handleAddAnotherDeliveryChange}>
                    Add Another Delivery
                </Button>
            </Box>

            {/* Including other input fields and forms here */}
            </Box>
                
                <Box display="flex" mb={4}>
                    <Box flex={1} mr={2}>
                    <Typography variant="subtitle2" className={classes.sectionSubtitle}>Fees/Charges</Typography>
                <TextField
                label="Primary Fee"
                value={primaryFee}
                onChange={handlePrimaryFeeChange}
                />

                <TextField
                label="Primary Fee Type"
                value={primaryFeeType}
                onChange={handlePrimaryFeeTypeChange}
                />

                <TextField
                label="Fuel Surcharge Fee"
                value={fscAmount}
                onChange={handleFscAmountChange}
                />

                <TextField
                label= "FSC amount Type"
                value={fscAmountType}
                onChange={handleFscAmountTypeChange}
                /> 

                </Box>
                <Box flex={1}>
                    <Typography variant="subtitle2">Accessory Fees</Typography>
                    <TextField
                    label="Detention"
                    value={detention}
                    onChange={handleDetentionChange}
                    />

                    <TextField
                    label="Lumper"
                    value={lumper}
                    onChange={handleLumperChange}
                    />

                    <TextField
                    label="Stop Off"
                    value={stopOff}
                    onChange={handleStopOffChange}
                    />

                    <TextField
                    label="Tarp Fee"
                    value={tarpFee}
                    onChange={handleTarpFeeChange}
                    />

                    <TextField
                    label="Additional"
                    value={additional}
                    onChange={handleAdditionalChange}
                    />

                    <Button variant="outlined" color="primary" onClick={handleAddAdditionalFeeChange}>
                        Add Additional Fee
                        </Button>

                    <TextField
                    label="Invoice Advance"
                    value={invoiceAdvance}
                    onChange={handleInvoiceAdvanceChange}
                    />

                </Box>


            </Box>

            </form> 
            </div> 
    );
}

