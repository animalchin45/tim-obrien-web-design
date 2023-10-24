import React from 'react';
import Box from '../img/logoBox.svg';

const Hero = () => (
  <section className='portfolio__section portfolio__section--hero'>
    <div className='hero__header'>
      <Box className='hero__box' />
      <h1 className='u-text-align-left'>
        Tim <br />
        O&apos;Brien
      </h1>
      <h2 className='u-margin-bottom u-text-align-left'>
        Front-End <br /> Web Developer
      </h2>
    </div>
    <div className='u-divider--v' />
    <div className='hero__tagline'>
      <p className='u-margin-bottom'>
        Hello there! I&apos;m a self-taught developer looking to work for an
        exciting company. Thank you for looking at my portfolio.
      </p>
      <div className='hero__header--btn'>
        <a className='btn' href='#contact'>
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
