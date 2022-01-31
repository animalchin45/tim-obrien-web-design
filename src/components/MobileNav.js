import React, { useState } from 'react'

const MobileNav = () => {
    const [hamburgerClass, setHamburgerClass] = useState(`hamburger hamburger--spring`)
    const [mobileNavLinksClass, setMobileNavLinksClass] = useState({
        opacity: 0,
        left: '-1200px'
    })

    const handleMenuClick = () => {
        setHamburgerClass(`hamburger hamburger--spring`)
        setMobileNavLinksClass({
            opacity: 0,
            left: '-1200px'
        })
    }

    const handleHamburgerClick = () => {
        if (hamburgerClass === `hamburger hamburger--spring`) {
            setHamburgerClass(`hamburger hamburger--spring is-active`)
            setMobileNavLinksClass({
                opacity: 1,
                left: '0'
            })
        } else {
            setHamburgerClass(`hamburger hamburger--spring`)
            setMobileNavLinksClass({
                opacity: 0,
                left: '-1200px'
            })
        }
    }

    return (
        <div className="mobile-nav">
            <nav className="mobile-nav__links" onClick={() => handleMenuClick()} style={mobileNavLinksClass}>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
            </nav> 
            <button className={hamburgerClass} onClick={() => handleHamburgerClick()} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
        
    )
}

export default MobileNav