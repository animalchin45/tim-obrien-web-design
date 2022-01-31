import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from 'react-responsive'
import SectionTitle from './SectionTitle'

import { 
    custom,
    mobile,
    search
} from '../img/index.js'

const Services = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' })

    const services = [
        {
            img: custom,
            title: "Custom Web Design",
            text: "Focus on what’s important. I develop a customer focused user experience that is tailored to your business. My custom-built sites allow the flexibility to evolve with changes in your goals.",
            alt: "Custom Web Design"
        },
        {
            img: mobile,
            title: "Mobile First Approach",
            text: "Prioritize your most important content so that world can see the best you have to offer. Enjoy a web presence with fast load times and a more responsive interface.",
            alt: "Mobile First Approach"
        },
        {
            img: search,
            title: "Search Engine Optimization",
            text: "Reach your target audience with a site designed to increase organic discovery and provide high quality traffic.",
            alt: "Search Engine Optimization"
        }
    ]

    const renderedServices = services.map((service) => {
        return (
            <li key={uuidv4()}>
                {isDesktop && <img src={service.img} alt={service.alt}/>}
                <strong><p className="u-margin-bottom-medium">{service.title}</p></strong>
                <p className="service-text">{service.text}</p>
                {!isDesktop && <img src={service.img} alt={service.alt}/>}
            </li>
        )
    })

    return (
        <section 
            id="services" 
            className={isDesktop ? "portfolio__section--roller portfolio__section--services" : "portfolio__section--services"}
        >
            <div 
                className={isDesktop ? "portfolio__section--title-box" : "portfolio__section--title-box u-display--off"}
            >
                <SectionTitle 
                    text={'Services'}
                />
                <div className="u-divider--v"></div>
            </div>
            
            <div>
                <ul className="services__list">
                    {renderedServices}
                </ul>
            </div>
        </section>
    )
}

export default Services