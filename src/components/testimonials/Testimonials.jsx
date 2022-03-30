import React from 'react'
import './Testimonials.css'
import CLI1 from '../../assets/test11.png'
import CLI2 from '../../assets/test22.jpg'
import CLI3 from '../../assets/test33.png'
import CLI4 from '../../assets/test2.jpg'

//import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

//import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    image: CLI1,
    name: 'Samson Kej',
    review: 'This guy is incredibly awesome, I hired him and when he delivered, I honestly fell in love with the project. He is indeed a great guy.'
  },

  {
    image: CLI2,
    name: 'Francis Smith',
    review: 'I patronized Joyz and when He delivered, I liked what i saw. He is a very honest guy and he delivers ontime.'
  },

  {
    image: CLI3,
    name: 'Helen B',
    review: 'It was nice hiring this guy, he delivered even more than I imagined.'
  },

  {
    image: CLI4,
    name: 'Mikel',
    review: 'He has a way of satisfying me with his work. He\'s a great guy.'
  }
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      //install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesParView={1}
      pagination={{ clickable: true }}
    
      >
        {
          data.map(({image, name, review}, index) => {
            return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__image'>
                <img src={image} />
              </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials