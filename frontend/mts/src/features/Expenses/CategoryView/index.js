import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, makeStyles } from '@material-ui/core';
import api from '../../../api';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

function CategoryView({ category, onClose, onDelete }) {
  const classes = useStyles();
  const [isUpdateMode, setUpdateMode] = useState(false);

  const handleUpdate = () => {
    setUpdateMode(true);
  };

  const handleDelete = () => {
    // Prompt user for confirmation
    const confirmDelete = window.confirm(`Are you sure you want to delete the category: ${category.name}?`);
    
    if (confirmDelete) {
      // Make API call to delete category
      api.delete(`/api/expenseCategories/${category._id}`)
        .then(() => {
          onDelete(category._id); // Remove deleted category from the UI
          onClose();
        })
        .catch((error) => {
          console.error('Error deleting category:', error);
        });
    }
  };

  return (
    <Dialog open={true} onClose={onClose} aria-labelledby="category-dialog-title">
      <DialogTitle id="category-dialog-title">{category.name} Category</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="subtitle1">Status: {category.status}</Typography>
        {/* Add more category details here */}
        {isUpdateMode ? (
          // Display update form if in update mode
          // You can create a separate component for the update form
          // Pass the category data and a callback to handle updates
          //  <CategoryUpdateForm category={category} onUpdate={handleUpdate} onCancel={() => setUpdateMode(false)} />
          <div>Update Form (Create a separate component)</div>
        ) : (
          // Display category details
          <div>
            {/* Add more category details here */}
          </div>
        )}
      </DialogContent>
      <DialogActions className={classes.buttonContainer}>
        {!isUpdateMode && (
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        )}
        <Button onClick={handleDelete} color="secondary">
          Delete
        </Button>
        <Button onClick={onClose} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CategoryView;
