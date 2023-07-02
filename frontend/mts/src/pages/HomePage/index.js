import React from 'react'
import Footer from './components/Footer'
import OutNavBar from '../../common/Header/OutNavBar'
import SubHeading from './components/SubHeading'
import Eld from './containers/Eld'
import Features from './containers/Features'
import GetStarted from './containers/GetStarted'
import HowItWorks from './containers/HowItWork'
import Intergration from './containers/Intergration'
import IntroText from './containers/IntroText'
import Mts from './containers/Mts'
import OrderEld from './containers/OrderEld'
import Testmonials from './containers/Testmonials'
function index() {
  return (
    <div> 
<OutNavBar/>
<SubHeading/>
<IntroText/>
<Intergration/>
<HowItWorks/>
<GetStarted/>
<Testmonials/>
<Mts/>
<GetStarted/>
<Eld/>
<OrderEld/>
<Features/>
<Footer/>
    </div>
  )
}

export default index