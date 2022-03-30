import React from 'react'
import './Portfolio.css'
import port1 from '../../assets/port1.png'
import portsun2 from '../../assets/portsun3.png'

const data = [
  {
    id:1,
    image: port1,
    title: 'An online medical and appointment design.',
    github: 'https://github.com/peejoyz/Booking-appointment',
    demo: 'https://glorymedicals.netlify.app'
  },

  {
    id:2,
    image: portsun2,
    title: 'A Hotel website.',
    github: 'https://github.com/peejoyz/sunrise',
    demo: 'https://sunrisehabor.netlify.app/'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio