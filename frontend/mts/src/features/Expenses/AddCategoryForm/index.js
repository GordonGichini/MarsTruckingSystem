import React, { useState } from 'react';
import api from '../../../api';
import { toast } from 'react-toastify';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

function AddCategoryForm({ open, onClose, onSave }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [status, setStatus] = useState('Active');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

  try {
    const response = await api.post('/api/expenseCategories', { name, status });
    if (response.status === 201) {
      setMessage('');
      setName('');
      setStatus('Active');
      onSave(response.data);
      onClose();
      toast.success('Expense category created successfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  } catch (error) {
    setMessage('Error creating expense category. Please try again.');
    console.error('Error creating expense category:', error);
    toast.error('Error creating expense category. Please try again', {
      position: toast.POSITION.TOP_CENTER,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
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
      </form>
    </Dialog>
  );
}

export default AddCategoryForm;
