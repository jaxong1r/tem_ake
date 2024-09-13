import React from 'react'
import '../src/style/work.css'
 

function Works({img,h4,yil,p}) {
  return (
    
    <div className='work_wrapper'>
       <img width={200} src={img} alt="" /> 
      <div>
        <h4>{h4}</h4>
        <div className="span_w">
            <span className='yil'>{yil}</span> 
            <h5>{p}</h5>
            </div>
        
        </div>
    </div>
  )
}

export default Works
