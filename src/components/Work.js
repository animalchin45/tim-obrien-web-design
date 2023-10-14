import React from 'react'

import SectionTitle from './SectionTitle'

const Work = () => {
  return (
    <>
      <section
        id='projects'
        className='portfolio__section portfolio__section--work portfolio__section--work--top'
      >
        <SectionTitle text={'Projects'} comment={''} />

        <div className='u-divider--v'></div>

        <div className='work__job'>
          <h4>Movietime</h4>

          <p className='work__text'>
            MERN stack project that is expanding my knowledge of Node.js and
            Redux while also showcasing my growing skillset. Users can search
            movie and tv titles that they can save and rate.
          </p>

          <a
            className='btn btn--work'
            href='https://movietime.onrender.com/'
            target='_blank'
            rel='noreferrer'
          >
            VISIT
          </a>
        </div>
      </section>

      <section
        id='work'
        className='portfolio__section portfolio__section--work'
      >
        <div className='work__job'>
          <h4>Unified Therapy</h4>

          <p className='work__text'>
            My first freelance project. Features a multipage layout with React
            Router navigation. I increased my client's business leads with an
            easy to use email contact form.
          </p>

          <a
            className='btn btn--work'
            href='https://blempereur.com'
            target='_blank'
            rel='noreferrer'
          >
            VISIT
          </a>
        </div>

        <div className='u-divider--v'></div>

        <div className='work__job'>
          <h4>Planet Facts</h4>

          <p className='work__text'>
            A single page project that takes you on an informative journey
            through the solar system. Users can explore topics about each planet
            in detail.
          </p>

          <a
            className='btn btn--work'
            href='https://planet-faqs.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            VISIT
          </a>
        </div>
      </section>

      <section
        id='work'
        className='portfolio__section portfolio__section--work'
      >
        <div className='work__job'>
          <h4>Dictionary</h4>

          <p className='work__text'>
            Enjoy learning about words with this simple yet effective dictionary
            project. Users are able to search for words, hear pronunciations,
            and learn different meanings.
          </p>

          <a
            className='btn btn--work'
            href='https://dictionary-bice.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            VISIT
          </a>
        </div>

        <div className='u-divider--v'></div>

        <div className='work__job'>
          <h4>Connect Four</h4>

          <p className='work__text'>
            Fun for all with this board game classic. This project showcases my
            use of state management and javascript algorithms.
          </p>

          <a
            className='btn btn--work'
            href='https://connect-four-seven-gray.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            VISIT
          </a>
        </div>
      </section>
    </>
  )
}

export default Work
