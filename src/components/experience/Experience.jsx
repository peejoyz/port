import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>HTML</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon' /> 
                  <div>
                    <h4>CSS</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>Javascript</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>JQuery</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>Bootstrap</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>React JS</h4> 
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
              </div>   
        </div>

        <div className="experience__backend">
              <div className="experience__content">
                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>Node JS</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>MongoDB</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>Express JS</h4> 
                  </div>
                </article>

                <article className="experience__details">
                  <BsFillPatchCheckFill className='experience__details-icon'/> 
                  <div>
                    <h4>MySQL</h4> 
                  </div>
                </article>
              </div> 
        </div>
      </div>
    </section>
  )
}

export default Experience