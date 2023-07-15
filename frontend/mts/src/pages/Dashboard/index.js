import React from 'react'
import Alerts from './Alerts'
import InNavBar from '../../common/Header/InNavBar'
import MiddleNavBar from './MiddleNavBar'
import GetStarted from './GettingStarted'
import ReleaseNotes from './ReleaseNotes'
import Welcome from './Welcome'
import { Container } from '@material-ui/core';

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="md">      
    <InNavBar/>
      <MiddleNavBar/> 
          <GetStarted/>
          <ReleaseNotes/>
             <Welcome/>
      <Alerts/>
      </Container>
    </div>
  )
}

export default Dashboard
