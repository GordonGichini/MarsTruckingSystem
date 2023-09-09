import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
//import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme(); 
const api = axios.create({
  baseURL: 'http://localhost:5001',
});


export default function SignUpSide() { 
const [isLoading, setIsLoading] = useState(false);

const formik = useFormik({
  initialValues: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  validationSchema: Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  }),

  onSubmit: async (values) => {
    try {
      setIsLoading(true);

      const response = await api.post('/api/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword
      });

      if (response.status === 200) {
        window.location.href = '/welcome';
      } else {
        formik.setFieldError('confirmPassword', 'Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      formik.setFieldError('confirmPassword', 'An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  },
});

const handlePasswordChange = (event) => {
  const newPassword = event.target.value;
  formik.setFieldValue('password', newPassword);
  formik.setFieldValue('confirmPassword', newPassword);
};

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"
       sx={{
         height: '100vh',
         mb: '2rem',
         mt: '2rem', 
         }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={12}
          md={3}
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                disabled={isLoading}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                disabled={isLoading}  
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={(e) => {
                  formik.handleChange(e);
                  handlePasswordChange(e);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                disabled={isLoading}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                disabled={isLoading}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={formik.handleSubmit}   
                disabled={isLoading}
                >
                {isLoading ? 'Registering...' : 'Sign up'}
              </Button>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}