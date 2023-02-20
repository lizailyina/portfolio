import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGlassdoor } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Liza Ilyina</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a target='_blank' href="https://github.com"><BsGithub /></a>
        <a target='_blank' href="https://linkedin.com"><BsLinkedin /></a>
        <a target='_blank' href="https://glassdoor.com"><SiGlassdoor /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Liza Ilyina. All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer