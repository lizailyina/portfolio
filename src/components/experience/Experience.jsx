import React from 'react'
import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>
        The Skills I Have
      </h5>
      <h2>
        My Experience
      </h2>

      <div className="container experience__container">
        <div className="experience__card">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> HTML </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> СSS + SASS, Tailwind </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> React v18 </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Redux toolkit </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Javasript + Typescript </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Bootstrap, Chakra UI, ... </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__card">
          <h3>Other Experience</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Linux, Unix Commands, Terminal </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Github, Git </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Algorithms and Data Structures </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> UX, UI design </h4>
                <small className='text-light'> Intermediate </small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Competative programming </h4>
                <small className='text-light'> Experienced </small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience