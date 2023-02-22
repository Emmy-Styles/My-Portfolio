import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/IMG1.png'
import IMG2 from '../../Assets/IMG2.png'
import IMG3 from '../../Assets/IMG3.png'
import IMG4 from '../../Assets/IMG4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'GitXplore',
    github: 'https://github.com/Emmy-Styles/AltSchool-Exam-Project',
    demo: 'https://emmy-repo.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Glamz Image Editor',
    github: 'https://github.com/Emmy-Styles/Glamz-Image-Editor',
    demo: 'https://glamz-editor.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Youtube Clone',
    github: 'https://github.com/Emmy-Styles/Youtube-Clone',
    demo: 'https://emmy-youtube.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'React Calculator',
    github: 'https://github.com/Emmy-Styles/React-Calculator',
    demo: 'https://react-calculator-one-puce.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio