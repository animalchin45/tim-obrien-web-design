import React from 'react'
import SectionTitle from './SectionTitle'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section id="contact" className="portfolio__section portfolio__section--contact">
            <SectionTitle 
                text={'Contact'}
            />
            <div className="u-divider--v"></div>
            <div className="contact">
                <div className="contact__header">
                    <p className="u-margin-bottom">Ready to embark on an exciting collaborative journey? Take a dive into my code on github or send a message below.</p>
                    <p className="u-margin-bottom"><a className="link" href="mailto:tim@timobrien.dev">tim@timobrien.dev</a></p>   
                    <div className="contact__icons">
                        <a href="https://github.com/animalchin45" target="_blank" rel="noreferrer"><i className="fab fa-github-square icon"></i></a> <a className="link" href="https://www.linkedin.com/in/tim-o-brien-51a7bb19/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin icon"></i></a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </section>
    )
}

export default Contact