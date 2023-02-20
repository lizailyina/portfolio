import React from 'react'
import './about.css'

import { FaAward } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'


import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>
        About Me
      </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>
                Certified Professional
              </h5>
              <small>
                Verified Meta Certificate
              </small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>
                Experience
              </h5>
              <small>
                1+ Year
              </small>
            </article>
            <article className='about__card'>
              <FaReact className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>
                10+ Complete
              </small>
            </article>

          </div>
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita corporis eligendi qui officiis quo quasi distinctio veritatis blanditiis molestiae dolore sequi mollitia, dolor accusamus? Numquam expedita ducimus quisquam voluptas quae.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About