import React from 'react'
import Alerts from './Alerts'
import InNavBar from '../../common/Header/InNavBar'
//import Footer from '../HomePage/components/Footer'
import MiddleNavBar from './MiddleNavBar'
import GetStarted from './GettingStarted'
import ReleaseNotes from './ReleaseNotes'
import Welcome from './Welcome'
import { Grid } from '@material-ui/core';

const Dashboard = () => {
  return ( 
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <InNavBar/>
        </Grid>
        <Grid item xs={12}>
          <MiddleNavBar/> 
        </Grid>
         
        <Grid item xs={12} md={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <GetStarted/>
          </Grid> 
            <Grid item xs={12}>
             <Welcome/>  
             </Grid>   
             </Grid>
             </Grid>   
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
          <ReleaseNotes/>
          </Grid>
           </Grid>
           </Grid>
          
             </Grid>         
        <Alerts/>
        </div>    
  );
};

export default Dashboard
