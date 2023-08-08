import React from 'react';
import { Typography, Table, TableHead, TableRow, TableCell, TextField, Button, Box, Grid } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';


const useStyles = makeStyles((theme) => ({
    formContainer: {
      maxWidth: 600,
      margin: '0 auto',
    },
    formSection: {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        margin: theme.spacing(2, 0),
    },
    expenseContainer: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),

    },
    sectionTitle: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(2),
    },
    sectionSubtitle: {
      marginBottom: theme.spacing(1),
    },
    table: {
        borderCollapse: 'collapse',
    },
    tableHeaderCell: {
        border: `1px solid ${theme.palette.grey[400]}`,
        padding: theme.spacing(1),
    },
    tableCell: {
        border: `1px solid ${theme.palette.grey[400]}`,
        padding: theme.spacing(1),
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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
    }; 

    
    // Routing Stop form state
    const [routingStopName, setRoutingStopName] = React.useState('');
    const [routingStopDate, setRoutingStopDate] = React.useState('');
    const [instructions, setInstructions] = React.useState('');
    const [notes, setNotes] = React.useState('');

    const handleRoutingStopNameChange = (event) => {
        setRoutingStopName(event.target.value);
    };

    const handleRoutingStopDateChange = (event) => {
        setRoutingStopDate(event.target.value);
    };

    const handleInstructionsChange = (event) => {
        setInstructions(event.target.value);
    };

    const handleNotesChange = (event) => {
        setNotes(event.target.value);
    }; 


    return (
        <div>
            <InNavBar />
            <Box className={classes.formContainer}>
        <Typography variant="h6" className={classes.sectionTitle}>Add Trip</Typography>
        <form>
            <Box className={classes.formSection}>
                <Typography variant="subtitle1">Basic Details</Typography>
            <TextField
            label="Custom Trip Number"
            value={customTripNumber}
            margin='normal'
            onChange={handleCustomTripNumberChange}
            variant="outlined"
            className={classes.inputField}
            /> 
            <Typography variant="caption">
                Optional Custom Trip number that will override the system generated trip number
            </Typography>
            <TextField
            label="Driver Name"
            value={driverName}
            margin='normal'
            onChange={handleDriverNameChange}
            variant="outlined"
            className={classes.inputField}
            /> 

            <Button 
            variant="outlined"  
            onClick={handleDriverNameChange}
            component={Link}
            color="primary"
            to="/"
            className={classes.button}
            >
                Create Driver
            </Button>
            <TextField
            label="Driver Pay"
            value={driverPay}
            margin='normal'
            onChange={handleDriverPayChange}
            variant="outlined"
            className={classes.inputField}
            />
            
            <TextField
            label="Driver Advance"
            value={driverAdvance}
            margin='normal'
            onChange={handleDriverAdvanceChange}
            variant="outlined"
            className={classes.inputField}
            />

            <Button variant="outlined" color="primary" onClick={handleAddDriverClick}
            className={classes.button}>
                Add Team Driver
            </Button>

            <TextField
            label="Truck"
            margin='normal'
            value={truck}
            onChange={handleTruckChange} 
            variant="outlined"
            className={classes.inputField}
            />
        
            <Button variant="outlined" color="primary" onClick={handleTruckChange}
            className={classes.button}>
                Create Truck 
            </Button>
            
            
            <TextField
            label="Trailer"
            value={trailer}
            margin='normal'
            onChange={handleTrailerChange}
            variant="outlined"
            className={classes.inputField}
            />
            <Button variant="outlined" color="primary" onClick={handleTrailerChange}
            className={classes.button}>
                    Create Trailer
            </Button> 
            
            
            <TextField
            label="Odometer"
            value={odometer}
            margin='normal'
            onChange={handleOdometerChange} 
            variant="outlined"
            className={classes.inputField}
            />
            </Box>
            <Typography variant="h6">Load</Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Custom Load Number</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Customer</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Pickup</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Delivery</TableCell>
                        <TableCell className={classes.tableHeaderCell}>From</TableCell>
                        <TableCell className={classes.tableHeaderCell}>To</TableCell>
                        <TableCell className={classes.tableHeaderCell}>BOL</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Actions</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            </form>
            </Box>
            
            <Box className={classes.formContainer}>
            <Box className={classes.formSection}>
                <Typography variant="subtitle2">Routing Stop (Optional)</Typography>
                <TextField
                label="Routing Stop"
                value={routingStopName}
                margin='normal'
                className={classes.inputField}
                onChange={handleRoutingStopNameChange}
                variant="outlined"
                />
                <Button variant="outlined" color="primary" onClick={handleRoutingStopNameChange}>
                    Create Routing stop
                    </Button>

                    <TextField
                    label="Routing Stop Date"
                    value={routingStopDate}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleRoutingStopDateChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Instructions"
                    value={instructions}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleInstructionsChange}
                    variant="outlined"
                    />

                    <TextField
                    label="Notes"
                    value={notes}
                    margin='normal'
                    className={classes.inputField}
                    onChange={handleNotesChange}
                    variant="outlined"
                    />
                    
            </Box> 
            </Box> 
            <Box className={classes.formContainer}>
            <Box className={classes.formSection}>
            <Typography variant="h6">Fuel Expenses</Typography>
            <Button variant="outlined" color="primary">Add Fuel Expenses</Button>
            </Box>
            <Box className={classes.formSection}>
            <Typography variant="h6">Truck Expenses</Typography>
            <Button variant="outlined" color="primary">Add Truck EXpenses</Button>
            </Box>
            <Box className={classes.formSection}>
            <Typography variant="h6">Reefer Fuel Expenses</Typography>
            <Button variant="outlined" color="primary">Add Reefer Fuel Expenses</Button>
            </Box>
            </Box>

            </div> 
    );
}

