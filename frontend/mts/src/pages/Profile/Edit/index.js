import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  TextField,
  Button,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heading: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formContainer: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
  },
}));

function EditPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Edit Name of Company Options
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" className={classes.heading}>
        Company Accounts
      </Typography>
      <Box className={classes.formContainer}>
        <TextField label="IFTA Account #" fullWidth />
        <TextField label="GST Tax ID #" fullWidth />
        <TextField label="Texas Taxpayer Number" fullWidth />
        <Typography variant="caption">
          This will be used on TX IFTA form to guide the user
        </Typography>
      </Box>

      <Typography variant="h5" className={classes.heading}>
        List Options
      </Typography>
      <Box className={classes.formContainer}>
        <TextField
          label="Default Records per Page"
          select
          fullWidth
          defaultValue={10}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </TextField>
      </Box>

      <Typography variant="h5" className={classes.heading}>
        Trip Options
      </Typography>
      <Box className={classes.formContainer}>
        <TextField
          label="Starting Trip"
          type="number"
          fullWidth
        />
        <Typography variant="caption">
          Set the number trips will count from
        </Typography>
        <TextField
          label="Street Level Routing"
          select
          fullWidth
          defaultValue="yes"
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </TextField>
      </Box>

      <Typography variant="h5" className={classes.heading}>
        Invoice Options
      </Typography>
      <Box className={classes.formContainer}>
        <TextField
          label="Starting Invoice"
          type="number"
          fullWidth
        />
        <Typography variant="caption">
          Set the number invoices will count from
        </Typography>
        <TextField label="Invoice Terms" fullWidth />
        <TextField label="Late Charge" fullWidth />
        <TextField label="Invoice Message" fullWidth />
        <Typography variant="caption">
          This message will be printed on your invoices
        </Typography>
      </Box>

      <Box className={classes.buttonContainer}>
        <Button variant="contained" color="primary">Save</Button>
        <Button>Cancel</Button>
      </Box>

      <Box className={classes.progressiveBar}>
        <Typography variant="body1">USDOT</Typography>
        <Typography variant="body1">Truck</Typography>
        <Typography variant="body1">Driver</Typography>
      </Box>
    </div>
  );
}

export default EditPage;
