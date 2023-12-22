import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-container">
          <div className='leftContent'>
            <h1 className='headerText'>Sign To Text Model</h1>
            <p className='textContainer'>A machine Learning model that helps people translate sign language to text </p>
            <button>Webcam</button>
          </div>
        </div>
        <div className="right-container">
            <img className='heroBanner' src="Frame 1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Hero