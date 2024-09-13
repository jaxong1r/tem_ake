 import React from 'react'
 import '../src/style/contact.css'
 import insta from '../src/images/insta.png'
 import  go from '../src/images/google.png'
 import  te from '../src/images/Без названия.png'
 import tel from '../src/images/ph.png'

 function ContactPage() {
   return (
     <div className='c_wr'>
     <div className="container"></div>
        <img src= {insta} alt="" /> <button><a href="">Go</a></button>
        <img src= {te} alt="" /> <button><a href="">Go</a></button>
        <img src={tel} alt="" />  <h2>:  tgulomjonov814@gmail.com</h2>
        <img src={go} alt="" />  <h2>:  tgulomjonov814@gmail.com</h2>
     </div>
   )
 }
 
 export default ContactPage
 