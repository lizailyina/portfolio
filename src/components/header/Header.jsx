import React from 'react'
import './header.css'
import CTA from './CTA'
import REACT_LOGO from '../../assets/react-logo.png'

import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="continer header__container">
        <h5>
          Hello, I'm
        </h5>
        <h1>
          Liza Ilyina
        </h1>
        <h5 className="text-light">
          Front-end developer
        </h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={REACT_LOGO} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      

      </div>
    </header>
  )
}

export default Header