import React from 'react'
import SectionTitle from './SectionTitle'

import timo from '../img/timo.jpg'

const About = () => {

    return (
        <section id="about" className="portfolio__section portfolio__section--about">
            <SectionTitle 
                text={'About Me'}
            />
            <div className="u-divider--v"></div>
            <div className="about">
                <div className="about__img">
                    <img src={timo} alt="Tim O'Brien"/>
                </div>
                <p>
                    Hello there! Thanks for looking me up. I focus on what’s important. As a self taught programmer and web designer I’ve forged my own path. I have a diverse
                    background including computer science and fine art. 
                </p>
            </div>
        </section>
    )
}

export default About