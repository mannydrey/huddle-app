import './Sec1.css'
import React from 'react'
import imagee from './images/img div.jpeg'

const Sec1 = () => {
    return (
        <div>
            <div className='txt'>
                <h1>Build the community your fans will love </h1>
                <p> Huddle re-margines the way we build communities. you have a </p>
                <p>voice , but so does your audience. Create connections</p>
                <p>with your users as you engage in genuine discussion. </p>
                <button>Get started for free</button>
            </div>
            <div className='img2'>
                <img src= {imagee} alt=''/>
            </div>
            
        </div>
    )
}

export default Sec1
