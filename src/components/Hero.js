import React from 'react'
import Box from '../img/logoBox.svg'

const Hero = () => {
    return (
        <section id="top" className="portfolio__section portfolio__section--hero">
            <div className="hero__header">
                <Box className="hero__box" />
                <h1 className="u-text-align-left">Tim <br/>O'Brien</h1>
                <h2 className="u-margin-bottom u-text-align-left">Web Developer</h2>
            </div>
            <div className="u-divider--v"></div>
            <div className="hero__tagline">
                <p className="u-margin-bottom">Hello there! I’m a self-taught developer looking to work for an exciting company. Thank you for looking at my portfolio.</p>
                <div className="hero__header--btn">
                    <a className="btn" href="#contact">Contact Me</a>
                </div>
            </div>          
        </section>
    )
}

export default Hero