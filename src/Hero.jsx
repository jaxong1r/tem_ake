import React from 'react'
import '../src/style/hero.css'
import h1 from '../src/images/temphoto.png'
function Hero() {
  return (
    <section className='hero1'>
      <div className="container">
        <div className="h1_wrapper">
            <div className="h1_content">
                <h1>Hi, I am Temur,<br /> 
                I am a trader</h1>
                <p>
                I will share my trading knowledge with you as much as I can, please contact me if you need help.</p>
                <button><a href="https://t.me/gulomjonovfx">Contact me</a></button>
            </div>
            <img className='photo' src={h1} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
