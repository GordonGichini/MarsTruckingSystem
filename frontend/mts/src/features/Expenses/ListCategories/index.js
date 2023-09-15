import React, { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../../api';
import InNavBar from '../../../common/Header/InNavBar';
//import Footer from '../../../pages/HomePage/components/Footer';
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

  const handleAddExpenseCategory = () => {
    setIsAddExpenseCategoryOpen(true);
  };

  const handleCloseAddExpenseCategory = () => {
    setIsAddExpenseCategoryOpen(false);
  }; 

  const createExpenseCategory = async (newExpenseCategoryData) => {
    try {
      const response = await api.post('/api/expenseCategories', newExpenseCategoryData);
      const newExpenseCategory = response.data;
      setExpenseCategories([...expenseCategories, newExpenseCategory]);
      handleCloseAddExpenseCategory();
    } catch (error) {
      console.error('Error creating category:', error);
      //error message to user

    }
  };

  useEffect(() => {
    //fetching expense categories from backend
    api.get('/api/expenseCategories')
    .then((response) => {
      setExpenseCategories(response.data);
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
    });
  });

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
            <Button>All</Button>
            <Button>Active</Button>
            <Button>Inactive</Button>
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
          <Button variant="contained" className={classes.addButton}>
            List Expenses
          </Button>
          <Button variant="contained" className={classes.addButton}>
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
            {expenseCategories.map((expenseCategory, index) => (
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
