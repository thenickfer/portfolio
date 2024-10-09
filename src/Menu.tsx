import { useState } from 'react'
import elipse from './assets/Ellipse.svg'
import circle from './assets/Animation.svg'
import './Menu.css'


function Home() {
    return (
        <div className='container'>
            <div className='logo-container'>
                <div className='logos'>
                    <img src={elipse} alt="elipse" className='logo orb' />
                    <img src={circle} alt="circle" className='logo circle' />
                </div>
            </div>

            <div className="options">

                <button className="option">
                    Home
                </button>
                <button className="option">
                    Work
                </button>
                <button className="option">
                    About
                </button>

            </div>
        </div>
    )
}

export default Home