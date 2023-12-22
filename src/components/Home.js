import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import Hero from './Hero'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home