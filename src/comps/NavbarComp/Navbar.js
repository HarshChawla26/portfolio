import React from 'react'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar sticky-top flex-box'>
      <div className='flex-box'><a href='/'>Portfolio</a></div>
      <div className='flex-box'>
        {
          // eslint-disable-next-line 
          <p><a href='#'>Home</a></p>
        }
        <p><a href='#about'>About Me</a></p>
        <p><a href='#services'>Services</a></p>
        <p><a href='#skills'>Skills</a></p>
        <p><a href='#projects'>Projects</a></p>
        <p><a href='#contacts'>Contacts</a></p>
      </div>
      <div id='hire-btn-box' className='flex-box'>
        <a href='#contacts' className='btn btn-primary hire-btn'>Hire me</a>
      </div>
    </div>
  )
}

export default Navbar