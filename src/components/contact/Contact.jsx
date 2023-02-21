import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const email = React.useRef();
  const name = React.useRef();
  const message = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      email: email.current.value,
      message: message.current.value,
    }
    emailjs.send('service_pwimrfr', 'template_67xqw9n', obj, 'A2-mO8HOJ4vH7eYBV')
  
    name.current.value = "";
    email.current.value = "";
    message.current.value = "";

  }

  return (
    <section id='contact'>
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>lizailyina13052005@gmail.com</h5>
            <a href="mailto:lizailyina13052005@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/100087213409218" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>WhatApp</h4>
            <h5>Messenger</h5>
            <a href="https://api.whatsapp.com/send?phone=12247179094" target="_blank">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form onSubmit={sendEmail}>
          <input ref={name} type="text" name='name' placeholder='Your Full Name' required />
          <input ref={email} type='email' name='email' placeholder='Your Email' required />
          <textarea ref={message} name='message' rows='7' placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact;