import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  ButtonGroup,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#212121',
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
  const [categoryList, setCategoryList] = useState([
    { name: 'Category 1', status: 'Active' },
    { name: 'Category 2', status: 'Inactive' },
    // Add more category objects as needed
  ]);

  return (
    <div>
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
          >
            Add Category
          </Button>
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
            {categoryList.map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.status}</TableCell>
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
