import React from 'react'
import image from './images/header img.jpeg'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='kay'>
            <div className='hud'>
            <img src={image} alt=""/> 
            </div>
            <div className='dii'>
                <button>Try it free</button>
            </div>
        
        </div>
        
    )
}

export default Navbar

