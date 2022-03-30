import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yowm86k', 'template_nkv7uid', form.current, '-EEEtAJ75Soux7afH')
      e.target.reset()
  };

  return (
    <section id='contact'>

      <h5>Get In Touch</h5>

      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>joyzdev73@gmail.com</h5>
            <a href='mailto:joyzdev73@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234</h5>
            <a href='https://api.whatsapp.com/send?phone=+2348163905061' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} autoComplete='off' onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required /> 
          <input type="text" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea> 
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        
      </div>

    </section>
  )
}

export default Contact