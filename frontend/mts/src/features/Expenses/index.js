import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import InNavBar from '../../common/Header/InNavBar';
import { Typography, makeStyles, Button, Table, Paper, TableHead, TableBody, TableCell, TableRow, TableContainer, TextField, Box } from '@material-ui/core';
import AddCategoryForm from './AddCategoryForm';
import ListCategories from './ListCategories';
import ExpenseDetails from './ExpenseDetails';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpensesAsync, selectExpenses } from '../../redux/slices/expenseSlice';

export { AddCategoryForm, ListCategories, ExpenseDetails }

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
    flexDirection: 'column',
    padding: theme.spacing(2), // Add some padding
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function Expenses() {
  const classes = useStyles();
  const [isAddCategoryOpen, setAddCategoryOpen] = useState(false);
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpenses);
  console.log('Selected expenses:', expenses);

  // Fetch expenses when the component mounts 
  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

  console.log(expenses);

  const handleOpenAddCategory = () => {
    setAddCategoryOpen(true);
  };

  const handleCloseAddCategory = () => {
    setAddCategoryOpen(false);
  };

  const handleSaveCategory = (category) => {
    // Save the category data here
    console.log(category);    
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
         
          {Array.isArray(expenses) && expenses.length === 0 ? (
        <div>
          {/* Add your expense video component here */}
          {/* <ExpenseVideo /> */} 
          <Typography variant="h5" className={classes.title}>Welcome to Expenses</Typography>
        </div>
          ) : (
            <div>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Truck</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.isArray(expenses) && expenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell component="th" scope="row">{expense.date}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>{expense.truck}</TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{expense.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {Array.isArray(expenses) && expenses.length === 0 && ( 
        <Box className={classes.addExpenseButton}>
          <Button variant="contained" color="primary" component={Link} to="/add-expense">
            Add First Expense
          </Button>
      </Box>
          )}
      </div>
          )}
      </Box>
      </div>
  );
          }

export default Expenses