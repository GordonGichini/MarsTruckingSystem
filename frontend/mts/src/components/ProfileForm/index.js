import React from 'react';
import { Typography, TextField, Button, Box, Grid } from '@material-ui/core';
import InNavBar from '../../common/Header/InNavBar';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
    borderRadius: theme.spacing(2),
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
    marginLeft: theme.spacing(2),
  },
  search: {
    width: '50%',
    justifyContent: 'center',
    marginLeft: theme.spacing(2),
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








export default function ProfileForm() {
  const classes = useStyles();
  const theme = useTheme();
  const handleSaveClick = () => {
    // Logic for saving address details
  };

  return (
    <div>
      <InNavBar />
      <Typography variant="h6" className={classes.sectionTitle}>Company Name</Typography>
      <Box mt={2} p={1} border="1px solid green" sx={{ m: "20px", height: 'auto' }}>
      <Typography variant="body1">Notice: Please fill in your company details below. Your city and state are required. This information will appear on your invoices and be used to set the initial location for your units.</Typography>
      </Box>
      <Typography variant="h6" className={classes.sectionSubtitle}>Editing Company Address</Typography>
      <TextField label="Search" variant="outlined" className={classes.search} />
      <Typography variant="caption">Select an address to autofill this form</Typography>

      <Box className={classes.formContainer}>   
        <Grid container spacing={3}>
          <Grid item xs={6}>
        <TextField label="Company Name" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Street" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Apt/Suite/Other" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="City" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="State/Province" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="ZIP Code" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Phone Number" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Phone Extension Number" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Alternate Phone" margin='normal' variant="outlined" className={classes.inputField} />
        </Grid>
        <Grid item xs={6}>
        <TextField label="Alternate Phone Extension" margin='normal' variant="outlined" className={classes.inputField} />
        
        <TextField label="Number" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Fax" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Email" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Website" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Contact" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Notes" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Motor Carrier Number" margin='normal' variant="outlined" className={classes.inputField} />
        <TextField label="Tax ID (EIN#)" margin='normal' variant="outlined" className={classes.inputField} />

        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
        <Button variant="text" color="secondary">
          Cancel
        </Button>
        </Grid></Grid>
      </Box>
    </div>
  );
}
