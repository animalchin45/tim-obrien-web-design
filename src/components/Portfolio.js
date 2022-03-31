import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Top from './Top'
import MobileNav from './MobileNav'

const Portfolio = () => {
    const [colorChange, setColorchange] = useState(false);

    const handleScroll = () =>{
        if (window.scrollY > 100){
            setColorchange(true)
        } else {
            setColorchange(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="portfolio">
            <Nav colorChange={colorChange} />
            <MobileNav />
            <Hero />
            <About />
            <Work/>
            <Contact/>
            <Top />
        </div>
    )
}

export default Portfolio