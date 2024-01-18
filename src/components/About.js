import React from 'react'
import image from '../images/cyanbb.png'

export default function About(){
    return (
        <div className='indexpage'>
            <img className='background-img' src={image} alt='background' />
            <div className='center-box'>
                <h1>About</h1>
            </div>
        </div>
    )
}