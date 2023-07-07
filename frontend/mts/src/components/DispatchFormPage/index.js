import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

export default function DispatchFormPage() {
    // Defining state variables for capturing form inputs
    const [customTripNumber, setCustomTripNumber] = React.useState('');
    const [driverName, setDriverName] = React.useState('');
    const [driverPay, setDriverPay] = React.useState('');
    const [driverAdvance, setDriverAdvance] = React.useState('');
    const [truck, setTruck] = React.useState('');
    const [trailer, setTrailer] = React.useState('');
    const [odometer, setOdometer] = React.useState('');
    const [customer, setCustomer] = React.useState('');


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

    return (
        <div>
        <Typography variant="h6">Add Dispatch</Typography>

        <form onSubmit={handleFormSubmit}>
            <TextField
            label="Custom Trip Number"
            value={customTripNumber}
            onChange={handleCustomTripNumberChange}
            /> 

            <TextField
            label="Driver Name"
            value={driverName}
            onChange={handleDriverNameChange}
            /> 

            <Button variant="contained" color="primary" onClick={handleDriverNameChange}>
                Create Driver
            </Button>

            <TextField
            label="Driver Pay"
            value={driverPay}
            onChange={handleDriverPayChange}
            /> 

            <TextField
            label="Driver Advance"
            value={driverAdvance}
            onChange={handleDriverAdvanceChange}
            />

            <Button variant="contained" color="primary" onClick={handleAddDriverClick}>
                Add Team Driver
            </Button> 

            <TextField
            label="Truck"
            value={truck}
            onChange={handleTruckChange} 
            /> 

            <Button variant="contained" color="primary" onClick={handleTruckChange}>
                Create Truck 
                </Button>
                <Button variant="contained" color="primary" onClick={handleTrailerChange}>
                    Create Trailer
                    </Button> 
            
            <TextField
            label="Odometer"
            value={odometer}
            onChange={handleOdometerChange} 
            />

            <TextField
            label="Customer"
            value={Customer}
            onChange={handleCustomerChange}
            /> 

            <Button variant="contained" color="primary" onClick={handleCustomerChange}>
                Create customer
            </Button>

            {/* Including other input fields and forms here */}

            </form> 
            </div> 
    );
}

