import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#fff',
    },
    primary: {
      main: '#4CAF50', // Green color
    },
    secondary: {
      main: '#F44336', // Red color
    },
    grey: {
      main: '#9E9E9E', // Grey color
    },
  },

  spacing: 8,
});

export default theme;
