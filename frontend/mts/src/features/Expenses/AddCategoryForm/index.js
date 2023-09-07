import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

function AddCategoryForm({ open, onClose, onSave }) {
  const classes = useStyles();
  const [categoryName, setCategoryName] = useState('');
  const [categoryStatus, setCategoryStatus] = useState('Active');

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleCategoryStatusChange = (event) => {
    setCategoryStatus(event.target.value);
  };

  const handleSave = () => {
    onSave({
      name: categoryName,
      status: categoryStatus,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New Expense Category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name of the Category"
          fullWidth
          value={categoryName}
          onChange={handleCategoryNameChange}
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="category-status-label">Status</InputLabel>
          <Select
            labelId="category-status-label"
            id="category-status"
            value={categoryStatus}
            onChange={handleCategoryStatusChange}
          >
            <MenuItem value="Active">Active</MenuItem>
            <MenuItem value="Inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCategoryForm;
