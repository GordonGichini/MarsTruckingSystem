import React from 'react'
import Alerts from './Alerts'
import InNavBar from '../../common/Header/InNavBar'
import MiddleNavBar from './MiddleNavBar'
import GetStarted from './GettingStarted'
import ReleaseNotes from './ReleaseNotes'
import Welcome from './Welcome'
import { Grid } from '@material-ui/core';

const Dashboard = () => {
  return (
    <div>
      <InNavBar/>
      <MiddleNavBar/> 
      <Grid container spacing={3}>
        <Grid item xs={10} md={6}>
          <GetStarted/>
        </Grid> 
        <Grid item xs={8} md={6}>
          <ReleaseNotes/>
        </Grid>
      </Grid>
             <Welcome/>
      <Alerts/>
    </div>
  )
}

export default Dashboard
