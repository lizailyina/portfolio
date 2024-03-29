import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data = [
  {
    id: 1,
    image: IMG5,
    title: "NewTube",
    github: "https://github.com/lizailyina/youtube-frontend",
    demo: "https://youtube-frontend-rho.vercel.app/",
  },
  {
    id: 2,
    image: IMG4,
    title: "React Pizza",
    github: "https://github.com/lizailyina/react-pizza",
    demo: "https://react-pizza-ptnumzpmt-lizailyina.vercel.app/",
  },
  {
    id: 3,
    image: IMG1,
    title: "React MERN Blog",
    github: "https://github.com/lizailyina/blog-front-end",
    demo: "https://blog-front-er23egbs5-lizailyina.vercel.app/",
  },
  {
    id: 4,
    image: IMG2,
    title: "React Sneakers",
    github: "https://github.com/lizailyina/react-sneakers",
    demo: "https://react-sneakers-6phsu21bf-lizailyina.vercel.app/",
  },
  {
    id: 5,
    image: IMG3,
    title: "TwentyNineMonths",
    github: "https://github.com/lizailyina/TwentyNineMonths",
    demo: "https://lizailyina.github.io/TwentyNineMonths",
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <a href={demo} >
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt="" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn" target="_blank">
                      Github
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      Live Demo
                    </a>
                  </div>
                </article>
              </a>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio