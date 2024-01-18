import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/VectoRent.png'



export default function Signup(){


    function handleSubmit(){

    }

    function handleChange(){

    }

    return (
        <div className='sign-div'>
      <form className='sign-form'>
        <p>Sign Up</p>
        <img className='login-image'  src={image} alt='' />
        <div className='form-group'>
          <label>Name:</label>
          <input type="text" name="Fn" onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email Id:</label>
          <input type="text" name="Ln" onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input type="password" name="pass" onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPass" onChange={handleChange} required />
        </div>
        <div className="box">
          <Link to="/home" className="btn btn-white btn-animation-1" onClick={handleSubmit}>
            Register
          </Link>
        </div>
      </form>
    </div>
    )
}