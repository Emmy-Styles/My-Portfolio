import React from 'react'
import './footer.css'
import { BsWhatsapp } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">EMMY</a>


      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/Code_Scribe"><BsWhatsapp /></a>
        <a href="https://linkedin.com/mwlite/in/emmanuel-ulelu-124219221"><BsLinkedin /></a>
        <a href="https://instagram.com/emmy0fficial"><BsInstagram /></a>
      </div>


      <div className="footer__copyright">
        <small>&copy; ULELU EMMANUEL. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer