import React from 'react'
import './contact.css'
import { MdOutlineEmail as Email } from 'react-icons/md'
import { FiTwitter as Twitter } from 'react-icons/fi'
import { BsWhatsapp as Whatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dvswb5', 'template_ygxuknw', form.current, 'gRLmdFgXmB7Bh7fM7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <Email className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>uleluemmanuel@gmail.com</h5>
            <a href="mailto:uleluemmanuel@gmail.com" target={'_blank'} >Send a message</a>
          </article>
          <article className="contact__option">
            <Twitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Code_Scribe</h5>
            <a href="https://www.twitter.com/Code_Scribe" target={'_blank'} >Send a message</a>
          </article>  
          <article className="contact__option">
            <Whatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2348130279740</h5>
            <a href="https://api.whatsapp.com/send?phone+2348130279740" target={'_blank'} >Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact