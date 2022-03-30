import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {FcAbout} from 'react-icons/fc'
import {BiBookmark} from 'react-icons/bi'
import {TiPointOfInterest} from 'react-icons/ti'
import {RiContactsFill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav,] = useState('#')
  
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <BiHomeAlt className='show'  /> 
        <span className='over'>
          Home
        </span>
      </a>
     
      <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}> <FcAbout className='show' /> 
        <span className='over'>
          About
        </span>
      </a>
      
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BiBookmark className='show' /> 
        <span className='over'>
          Skills
        </span>
      </a>

      <a href="#interest" onClick={() => setActiveNav('#interest')} className={activeNav === '#interest' ? 'active' : ''}> <TiPointOfInterest className='show'  />
        <span className='over'>
          Interest
        </span> 
      </a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <RiContactsFill className='show'  />
        <span className='over'>
          Contact
        </span>
      </a>    
    </nav>
   
  )
 
}

export default Nav