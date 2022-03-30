import React from 'react'
import './headersocial.css'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/peejoyz' target="_blank"> <BsGithub className='social_show'/>
          <span className='social_text'>
            Github
          </span>
        </a>
        
        <a href='https://twitter.com/iampeejoyz' target="_blank"> <BsTwitter className='social_show'/>
          <span className='social_text'>
            Twitter
          </span>
        </a>
    </div>
  )
}

export default HeaderSocials