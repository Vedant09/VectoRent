import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/backdrop.png'

export default function IndexPage(){
    return (
        <div className='indexpage'>
            <div class="boxi">
                <img className='backdrop-img' src={image} alt='/'></img>
            </div>
            <Link to="/login" class="btn btn-white btn-animation-1">Login</Link>
        </div>
    )
}