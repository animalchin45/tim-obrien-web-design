import React from 'react'
import Box from '../img/logoBox.svg'

const Hero = () => {
    return (
        <section id="top" className="portfolio__section portfolio__section--hero">
            <div className="hero__header">
                <Box className="hero__box" />
                <h1 className="u-text-align-left">Tim <br/>O'Brien</h1>
                <h2 className="u-margin-bottom u-text-align-left">Web Design</h2>
                
            </div>
            <div className="u-divider--v"></div>
            <div className="hero__tagline">
                <p className="u-margin-bottom">Quality web design that will take your business to the next level.</p>
                <div className="hero__header--btn">
                    <a className="btn" href="#contact">Get Started</a>
                </div>
            </div>          
        </section>
    )
}

export default Hero