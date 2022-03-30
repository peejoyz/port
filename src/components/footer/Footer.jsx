import React from 'react'
import './Footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Ayodeji</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/iampeejoyz" target='_blank'> <IoLogoTwitter/> </a>
        <a href='https://api.whatsapp.com/send?phone=+2348163905061' target='_blank'> <BsWhatsapp/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ayodeji. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer