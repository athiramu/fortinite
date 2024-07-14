import React from 'react'
import Section1 from '../Components/Section1'
import Part2 from '../Components/Part2'
import Contribution from '../Components/Contribution'
import Project from '../Components/Project'


function Home() {
  return (
    <>
    <div className='home'>
    <Section1/>
    <Part2/>
    <Contribution/>
    <Project/>
    </div>
    </>
  )
}

export default Home