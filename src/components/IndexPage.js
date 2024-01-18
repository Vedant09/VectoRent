import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/cyanbb.png'

export default function IndexPage(){
    return (
        <div className='indexpage'>
            <img className='background-img' src={image} alt='background' />
            <div className='center-box'>
                <div>
                    <h1>Welcome To VectoRent</h1>
                </div>
                <Link to="/login" class="btn btn-white btn-animation-1">Login</Link>
                <Link to="/signup" class="btn btn-white btn-animation-1">Sign Up</Link>
                <Link to="/home" className='link'>Continue Shopping</Link>
            </div>
        </div>

    )
}