import React, { useState } from 'react';
import { Link } from "react-router-dom";
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
import { Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';
import ListCategories from './ListCategories';
import Stack from '@mui/material/Stack';

export { AddCategoryForm, ListCategories }

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Align buttons to the start
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  expenseContainer: {
    display: 'flex',
    height: '450px',
    width: '95%',
    flexDirection: 'column',
    border: '1px solid black', // Add a black border
    borderRadius: theme.spacing(1), // Add some border radius
    padding: theme.spacing(2), // Add some padding
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  videoContainer: {
    display: 'flex',
    height: '450px',
    width: '50%',
    border: '1px solid green',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(2),
  },
  addExpenseButton: {
    display: 'flex',
    justifyContent: 'start-end',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Expenses() {
  const classes = useStyles();
  const [isAddCategoryOpen, setAddCategoryOpen] = useState(false);

  const handleOpenAddCategory = () => {
    setAddCategoryOpen(true);
  };

  const handleCloseAddCategory = () => {
    setAddCategoryOpen(false);
  };

  const handleSaveCategory = (category) => {
    // Save the category data here
    console.log(category);

    // Close the form
    setAddCategoryOpen(false);
  };

  return (
    <div>
      <InNavBar />
      <Box mt={4} ml={1} display="flex" className={classes.buttonContainer}>
        <Stack direction="row" spacing={0.5} />
        <Button variant="outlined" className={classes.button} component={Link} to="/add-expense">
          Add Expense
        </Button>
        <Button variant="outlined" className={classes.button} component={Link} to="/list-categories">
          List Categories
        </Button>
        <Button variant="outlined" className={classes.button} onClick={handleOpenAddCategory}>
          Add Category
        </Button>
      </Box>

      <AddCategoryForm
        open={isAddCategoryOpen}
        onClose={handleCloseAddCategory}
        onSave={handleSaveCategory}
      />
        <Box className={classes.expenseContainer}>
          <Typography variant="h5" className={classes.title}>Welcome to Expenses</Typography>
        <Box className={classes.videoContainer}>
          {/* Add your expense video component here */}
          {/* <ExpenseVideo /> */}
        </Box>
        

        <Box className={classes.addExpenseButton}>
          <Button variant="contained" color="primary" component={Link} to="/add-expense">
            Add First Expense
          </Button>
      </Box>
      </Box>
      </div>
  );
          }

export default Expenses