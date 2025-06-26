import React from 'react'
import Navber from './components/shared/navber'
import HeroSec from './components/common/hero-sec'
import About from './components/common/about'
import Solutions from './components/common/solutions'

export default function Home() {
  return (
    <>
       <Navber/>
       <HeroSec/>
       <About/>
       <Solutions/>
    </>
  )
}
