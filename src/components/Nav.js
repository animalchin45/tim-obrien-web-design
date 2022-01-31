import React from 'react'

const Nav = ({ colorChange }) => {
    return (
        <nav className={colorChange ? 'navbar navbar--scroll' : 'navbar'}>
            <a href="#services" className="btn--nav">Services</a>
            <span>{'//'}</span>
            <a href="#about" className="btn--nav">About</a>
            <span>{'//'}</span>
            <a href="#work" className="btn--nav">Work</a>
            <span>{'//'}</span>
            <a href="#contact" className="btn--nav">Contact</a>
        </nav>
    )
}

export default Nav