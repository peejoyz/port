import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import {BsAward} from 'react-icons/bs'
import {HiOutlineUsers} from 'react-icons/hi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5>Get To know me</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about-image">
            <img src={about} alt='About Image' />
          </div>
        </div>

        <div className="about__contact">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Client</h5>
              <small>12+</small>
            </article>

            <article className="about__card">
              <AiFillFolder className="about__icon"/>
              <h5>Projects</h5>
              <small>7+ Completed</small>
            </article>

          </div>

          <p>
            A web developer capable of continuous learning from other developers. 
            Experience in driving projects forward as the development team leader, 
            facilitating projects. Passionate about learning and development with a 
            desire to apply skills on a development team. Enjoy working closely 
            with team members to ensure  workloads are effectively redirected to 
            bottlenecks and personally picking up the slack when necessary.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About