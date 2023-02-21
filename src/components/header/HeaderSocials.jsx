import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/liza-ilyina-479a0024b' target="__blank"> <BsLinkedin /> </a>
        <a href='https://github.com/lizailyina' target="__blank"> <BsGithub /> </a>
        <a href='https://dribble.com' target="__blank"> <BsDribbble /> </a>
    </div>
  )
}

export default HeaderSocials