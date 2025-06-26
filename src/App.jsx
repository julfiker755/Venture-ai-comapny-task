import React from 'react'
import Navber from './components/shared/navber'
import HeroSec from './components/common/hero-sec'
import About from './components/common/about'
import Solutions from './components/common/solutions'
import Technologies from './components/common/technology'
import Benefits from './components/common/benefits'
import CaseUse from './components/common/case-use'
import GetStared from './components/common/get-started'
import Policy from './components/common/policy'
import SolutionTab from './components/common/solution-tab'

export default function Home() {
  return (
    <>
       <Navber/>
       <HeroSec/>
       <About/>
       <Solutions/>
       <SolutionTab/>
       <Technologies/>
       <Benefits/>
       <CaseUse/>
       <GetStared/>
       <Policy/>
    </>
  )
}
