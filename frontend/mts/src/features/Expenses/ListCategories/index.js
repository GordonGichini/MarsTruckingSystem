import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../../api';
import InNavBar from '../../../common/Header/InNavBar';
import AddCategoryForm from '../AddCategoryForm';
import { AppBar, Toolbar, Typography, Button, makeStyles, ButtonGroup, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
    marginTop: theme.spacing(8),
    marginLeft: theme.spacing(0),
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonGroup: {
    marginBottom: theme.spacing(2),
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function ListCategories() {
  const classes = useStyles();
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [isAddExpenseCategoryOpen, setIsAddExpenseCategoryOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');

  const handleAddExpenseCategory = () => {
    setIsAddExpenseCategoryOpen(true);
  };

  const handleCloseAddExpenseCategory = () => {
    setIsAddExpenseCategoryOpen(false);
  }; 

  const createExpenseCategory = async (newExpenseCategoryData) => {
    try {
      const response = await api.post('/expenseCategories', newExpenseCategoryData);
      const newExpenseCategory = response.data;

      if (response.status === 201) {
      setExpenseCategories((prevCategories) => [...prevCategories, newExpenseCategory]);
      handleCloseAddExpenseCategory();

      toast.success('Expense category created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {

      console.error('Unexpected response status:', response.status);
    }
    } catch (error) {
      console.error('Error creating category:', error);
      
      toast.error('Error creating expense category. Please try again', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    //fetching expense categories from backend
    api.get('/expenseCategories')
    .then((response) => {
      setExpenseCategories(response.data);
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
      toast.error('Error fetching categories. Please try again', {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  }, []);

  const filterCategories = () => {
    if (filterStatus === 'All') {
      return expenseCategories;
    } else {
      return expenseCategories.filter((category) => category.status === filterStatus);
    }
  };

  return (
    <div style={{ flex: 1 }}>
      <InNavBar />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            List Categories
          </Typography>
          <ButtonGroup
            color="secondary"
            className={classes.buttonGroup}
            aria-label="category status"
          >
            <Button onClick={() => setFilterStatus('All')}>All</Button>
            <Button onClick={() => setFilterStatus('Active')}>Active</Button>
            <Button onClick={() => setFilterStatus('Inactive')}>Inactive</Button>
          </ButtonGroup>
          <Button
            variant="contained"
            color="primary"
            className={classes.addButton}
            onClick={handleAddExpenseCategory}
          >
            Add Category
          </Button>
          <AddCategoryForm
          open={isAddExpenseCategoryOpen}
          onClose={handleCloseAddExpenseCategory}
          onSave={createExpenseCategory}
          />
          <Button variant="contained" className={classes.addButton} component={Link} to="/expenses">
            List Expenses
          </Button>
          <Button variant="contained" className={classes.addButton} component={Link} to="/add-expense">
            Add Expense
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h5" gutterBottom>
        Expense Categories
      </Typography>

      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name of Category</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterCategories().map((expenseCategory, index) => (
              <TableRow key={index}>
                <TableCell>{expenseCategory.name}</TableCell>
                <TableCell>{expenseCategory.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="primary">
                    View Category
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListCategories;
