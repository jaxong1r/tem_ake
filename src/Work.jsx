import React from 'react'
import '../src/style/work.css'
import Works from './Works'
import w1 from '../src/images/texnik.jpg'
import w2 from '../src/images/sell.jpg'
import w3 from '../src/images/treding.jpg' 

 
function Work() {
  return (
    <section className='work'>
      <div className="container">
        
        
   <Works img={w1} h4='Technical analysis' yil='2024'  /> 
         <Works img={w2} h4=' SELL/BUY' yil='2024'  />
         <Works img={w3} h4='Trading analysis ' yil='2024'  />
      </div>
    </section>
  )
}

export default Work
