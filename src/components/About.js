import React from 'react';

import SectionTitle from './SectionTitle';

import {
  html5,
  javascript,
  sass,
  reactIcon,
  reduxIcon,
  nodeIcon,
  timo,
} from '../img';

const About = () => (
  <section id='about' className='portfolio__section portfolio__section--about'>
    <SectionTitle text='About Me' />

    <div className='u-divider--v' />

    <div className='about'>
      <img className='about__me' src={timo} alt="Tim O'Brien" />
      <p>
        I&apos;ve forged my own path to become a skilled web developer with a
        focus on strong fundamentals and attention to detail. I&apos;m
        proficient in HTML, CSS, JavaScript, and modern front-end frameworks. My
        passion for crafting dynamic and responsive web applications that
        seamlessly merge functionality with design will be a great asset to your
        business.
      </p>
      <div className='about__tech'>
        <img className='about__tech--img' src={html5} alt='HTML 5' />
        <img className='about__tech--img' src={javascript} alt='Javascript' />
        <img className='about__tech--img' src={sass} alt='SaSS' />
        <img className='about__tech--img' src={reactIcon} alt='React.js' />
        <img className='about__tech--img' src={reduxIcon} alt='Redux' />
        <img className='about__tech--img' src={nodeIcon} alt='Node.js' />
      </div>
    </div>
  </section>
);

export default About;
