import React from 'react'
import AYODEJI from '../../assets/Ayodeji_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={AYODEJI} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA