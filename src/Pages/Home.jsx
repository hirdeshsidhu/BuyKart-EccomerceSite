import React from 'react'
import Carousel from '../Component/Carousel'
import MidBanner from '../Component/MidBanner'
import Features from '../Component/Features'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Carousel/>
      <MidBanner/>
      <Features />
    </div>
  )
}

export default Home
