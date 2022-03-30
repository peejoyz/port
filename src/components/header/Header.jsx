import React from 'react'
import './header.css'
import CTA from './CTA'
import yes from '../../assets/yes.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ayodeji Ojo</h1>
              (JOYZ) 
        <h5 className='text-light'>A Web Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className='yes'>
          <img src={yes} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header