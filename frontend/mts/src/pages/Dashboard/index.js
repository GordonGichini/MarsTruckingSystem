import React from 'react'
import Alerts from './Alerts'
import InNavBar from '../../common/Header/InNavBar'
import MiddleNavBar from './MiddleNavBar'
import GetStarted from './GettingStarted'
import ReleaseNotes from './ReleaseNotes'
import Welcome from './Welcome'

const Dashboard = () => {
  return (
    <div>
       <InNavBar/>
       <MiddleNavBar/>
       <GetStarted/>
       <ReleaseNotes/>
       <Welcome/>
      <Alerts/>
    </div>
  )
}

export default Dashboard
