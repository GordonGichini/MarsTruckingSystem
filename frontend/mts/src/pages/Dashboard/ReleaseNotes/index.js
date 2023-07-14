import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    height: '100%',
    overflow: 'auto',
  },
}));

const ReleaseNotes = () => {
  const classes = useStyles();

  // Fake data for the latest updates
  const updates = [
    { id: 1, title: 'New Feature 1', description: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'New Feature 2', description: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'New Feature 2', description: 'Consectetur adipiscing elit.' },
    { id: 4, title: 'New Feature 2', description: 'Consectetur adipiscing elit.' },
    { id: 5, title: 'New Feature 2', description: 'Consectetur adipiscing elit.' },
    { id: 6, title: 'Bug Fix', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
    // Add more updates here...
  ];

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Release Notes
      </Typography>
      <List>
        {updates.map((update) => (
          <ListItem key={update.id}>
            <ListItemText
              primary={update.title}
              secondary={update.description}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ReleaseNotes;
