import React, { useState } from 'react';
import axios from 'axios';
import api from '../../../api';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

function AddCategoryForm({ open, onClose }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');
  const [loading, setLoading] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

  try {
    const response = await api.post('/api/expenseCategories', { name, status });
    if (response.status === 201) {
      setMessage('Expense category created successfully.');
      setName('');
      setStatus('Active');
    }
  } catch (error) {
    setMessage('Error creating expense category. Please try again.');
    console.error('Error creating expense category:', error);
  } finally {
    setLoading(false);
  }
};

  return (
    <Dialog open={open} onClose={onClose} onSubmit={handleSubmit} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">New Expense Category</DialogTitle>
      {message && <p>{message}</p>}
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Name of the Category"
          value={name}
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="category-status-label">Status</InputLabel>
          <Select
            labelId="category-status-label"
            id="category-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
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
        <Button type="submit" disabled={loading} color="primary">
          {loading ? 'Creating...' : 'Create category'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryForm;
