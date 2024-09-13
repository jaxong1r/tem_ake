import React from 'react'
 import '../src/style/footer.css'
import insta from '../src/images/insta.png'
import fb from '../src/images/fb.png'
import  link from '../src/images/Linkedin.png'
import tvit from '../src/images/Group.png'
function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
         
            <div className="logo_w">
                 <img src={fb} alt="" /> 
                 <a href="https://www.instagram.com/temurr_broo?igsh=MXFmZWtsY2FqZHVjMw=="><img src={insta} alt="" /> </a>

                 <img src={tvit} alt="" /> 
                 <img src={link} alt="" />
            </div>
            <h5 className='f_span'>Copyright ©2020 All rights reserved </h5>

         
      </div>
    </footer>
  )
}

export default Footer
