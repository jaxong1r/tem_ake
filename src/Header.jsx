import React, { useRef } from 'react'
 import '../src/style/header.css'
 
function Header() {
 let modal = useRef()
 let burger = useRef()
  function openMenu(e){
   modal.current.classList.toggle("show")
   e.target.classList.toggle("active")
    }
  return (
    <header className='header'>
      <div ref={modal} className="modal">
       
       
      <ul className='menu'>
      <a href=''>About</a>
                <a href=''>Works</a>
                <a href=''>Blog</a>
            </ul>
      </div>



      <div className="container">
        
        <a id='logo1' href=""> <span className='logo1'>Tem_ake.o9</span></a>
        <div className='faq'>
        <a href=''>About</a>
                <a href=''>Works</a>
                <a href=''>Blog</a>
                <div onClick={(e)=>openMenu(e)}  className="burger">
          <div className='div' ref={burger}></div>
          <div className='div1' ref={burger}></div>
          <div className='div2' ref={burger}></div>
        </div>
            </div>


      </div>
    </header>
  )
}
export default Header
