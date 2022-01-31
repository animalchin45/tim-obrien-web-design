import React from 'react'
import ReactDOM from 'react-dom'
import Portfolio from './components/Portfolio'

import './styles/main.scss'

const TimDev = () => {
    return (
        <Portfolio />
    )
}

ReactDOM.render(<TimDev />, document.querySelector('#root'))