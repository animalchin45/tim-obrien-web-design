import React from 'react'
import useElementOnScreen from './hooks/useElementOnScreen'

const SectionTitle = ({ text }) => {
    const [ containerRef, isVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "200px",
        threshold: 1.0
    })

    return (
        <div className="portfolio__section__title-area">
            <h3 ref={containerRef} className={isVisible ? 'portfolio__section__title portfolio__section__title--on' : 'portfolio__section__title portfolio__section__title--off'}>{text}</h3>
        </div>
    )
}

export default SectionTitle