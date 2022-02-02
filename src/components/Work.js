import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import SectionTitle from './SectionTitle'

const Work = () => {
    const jobs = [
        {
            title: `Raging Bull Training`,
            icon: `fas fa-dumbbell`,
            href: `https://raging-bull-training.herokuapp.com/`
        },
        {
            title: `Photography`,
            icon: `fas fa-camera-retro`,
            href: `https://timophoto.vercel.app/`
        },
        {
            title: `gifsPlus!`,
            icon: `fas fa-laugh`,
            href: `https://gifsplus.vercel.app/`
        },
        {
            title: `Point Brew`,
            icon: `fas fa-beer`,
            href: `https://point-brew.vercel.app/`
        },
        {
            title: `Therapy`,
            icon: `fas fa-hand-holding-heart`,
            href: `https://blempereur.vercel.app`
        }
    ]

    const renderedJobs = jobs.map((job) => {
        return (
            <div className="work__job" key={uuidv4()}>
                <a 
                    className="work--link"
                    href={job.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    {job.title}
                    <i className={job.icon}></i>
                </a>
                <div className="u-divider--h"></div>
            </div>
        )
    })

    return (
        <section id="work" className="portfolio__section portfolio__section--work">
            <div>
                {renderedJobs}
            </div>
            <div className="u-divider--v"></div>
            <SectionTitle 
                text={'Work'}
            />
        </section>
    )
}

export default Work