import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import InNavBar from '../../common/Header/InNavBar';
import Footer from '../../pages/HomePage/components/Footer';
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addExpenseButton: {
    display: 'flex',
    justifyContent: 'start-end',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
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

  // Fetch expenses when the component mounts 
  useEffect(() => {
    dispatch(fetchExpensesAsync());
  }, [dispatch]);

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
          <Typography variant="h5" className={classes.title}>Welcome to Expenses</Typography>
          {expenses.length === 0 ? (
        <Box className={classes.videoContainer}>
          {/* Add your expense video component here */}
          {/* <ExpenseVideo /> */}
        </Box>

          ) : (
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Expense Name</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenses.map((expense) => (
                  <TableRow key={expense.id}>
                    <TableCell component="th" scope="row">
                      {expense.name}
                    </TableCell>
                    <TableCell align="right">{expense.amount}</TableCell>
                    <TableCell align="right">{expense.date}</TableCell>
                    <TableCell align="right">{expense.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
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