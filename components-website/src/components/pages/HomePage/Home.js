import React from 'react'
import Section from '../../Section'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'

function Home() {
  return (
    <>
    <Section {...homeObjOne}/>
    <Section {...homeObjThree}/>
    <Section {...homeObjTwo}/>
    <Section {...homeObjFour}/>
    </>
  )
}

export default Home