import React from 'react'

const Nav = ({ colorChange }) => {
    return (
        <nav className={colorChange ? 'navbar navbar--scroll' : 'navbar'}>
            <a href="#about" className="btn--nav">About</a>
            <span>{'//'}</span>
            <a href="#projects" className="btn--nav">Projects</a>
            <span>{'//'}</span>
            <a href="#contact" className="btn--nav">Contact</a>
        </nav>
    )
}

export default Nav