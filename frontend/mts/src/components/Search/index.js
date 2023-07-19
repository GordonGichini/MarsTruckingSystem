import React from 'react';
import { TextField, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
  searchInput: {
    marginLeft: theme.spacing(1),
  },
}));

const Search = () => {
  const classes = useStyles();

  const handleSearch = (event) => {
    // Logic for handling search
    console.log('Search:', event.target.value);
  };

  return (
    <div className={classes.searchContainer}>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <TextField
        className={classes.searchInput}
        variant="outlined"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
