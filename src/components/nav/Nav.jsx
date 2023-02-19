import React, { useState } from 'react'
import './nav.css'

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { TbAppWindow } from 'react-icons/tb'
import { BiMessage } from 'react-icons/bi'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> <BsBook /> </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}> <TbAppWindow /> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiMessage /> </a>
    </nav>
  )
}

export default Nav