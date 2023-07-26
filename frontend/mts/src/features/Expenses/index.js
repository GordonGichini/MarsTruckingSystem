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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // Align buttons to the start
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  expenseContainer: {
    border: '1px solid black', // Add a black border
    borderRadius: theme.spacing(1), // Add some border radius
    padding: theme.spacing(2), // Add some padding
    marginTop: theme.spacing(2),
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  addExpenseButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
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
      <Box mt={4} ml={1} display="flex">
        <Stack direction="row" spacing={0.5} />
        <Button variant="contained" className={classes.button} component={Link} to="/add-expense">
          Add Expense
        </Button>
        <Button variant="contained" className={classes.button} component={Link} to="/list-categories">
          List Categories
        </Button>
        <Button variant="contained" className={classes.button} onClick={handleOpenAddCategory}>
          Add Category
        </Button>
      </Box>

      <AddCategoryForm
        open={isAddCategoryOpen}
        onClose={handleCloseAddCategory}
        onSave={handleSaveCategory}
      />

        <Box className={classes.searchContainer}>
          <TextField
            className={classes.searchInput}
            variant="outlined"
            placeholder="Search..."
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>

        <Box className={classes.expenseTitleContainer}>
          <Typography variant="h4">Welcome to Expenses</Typography>
        </Box>

        <Box className={classes.videoContainer}>
          {/* Add your expense video component here */}
          {/* <ExpenseVideo /> */}
        </Box>

        <Box className={classes.addExpenseButton}>
          <Button variant="contained" color="primary" component={Link} to="/add-expense">
            Add First Expense
          </Button>
      </Box>
      <Footer />
      </div>
  );
          }

export default Expenses