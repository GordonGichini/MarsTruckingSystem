import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles, Button, TextField, Box } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';
import ListCategories from './ListCategories';

export {
  AddCategoryForm,
  ListCategories,
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  searchInput: {
    width: '400px',
  },
  expenseTitleContainer: {
    display: 'flex',
    justifyContent: 'center',
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
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Expenses Page
        </Typography>
      </Toolbar>
    </AppBar>

    <Box className={classes.buttonContainer}>
      <Button variant="contained"
       className={classes.button}
       component={Link}
       to="/add-expense">
        Add Expense
      </Button>
      <Button variant="contained"
       className={classes.button}
       component={Link}
       to="/list-categories">
        List Categories
      </Button>
      <Button variant="contained"
       className={classes.button}
       onClick={handleOpenAddCategory}>
        Add Category
      </Button> 
      <AddCategoryForm
      open={isAddCategoryOpen}
      onClose={handleCloseAddCategory}
      onSave={handleSaveCategory}
      />
    </Box>

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
      <Button variant="contained"
       color="primary"
       component={Link}
       to="/add-expense">
        Add First Expense
      </Button>
    </Box>
  </div>   
  );
}

export default Expenses