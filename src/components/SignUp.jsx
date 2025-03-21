import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import image from '../images/VectoRent.png'
import axios from 'axios';


export default function Signup(){
  const [formData, setFormData] = useState({
    Fn: '',
    Em: '',
    pass: '',
    confirmPass: ''
});


async function handleSubmit(e) {
  e.preventDefault();

  if (formData.pass !== formData.confirmPass) {
      alert("Passwords do not match!");
      return;
  }

  // Prepare data to send
  const dataToSend = {
      name: `${formData.Fn}`, 
      email: formData.Em,       
      password: formData.pass
  };

  try {
      const response = await axios.post('http://localhost:8080/vec/signup', dataToSend);
      alert(response.data);  
  } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup failed. Please try again.');
  }
}

    function handleChange(e) {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  }
 
    return (
        <div className='sign-div'>
      <form className='sign-form' onSubmit={handleSubmit} >
        <p>Sign Up</p>
        <img className='login-image'  src={image} alt='' />
        <div className='form-group'>
          <label>Name:</label>
          <input type="text" name="Fn" onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email Id:</label>
          <input type="text" name="Em" onChange={handleChange} required />
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
          <button type="submit" className="btn btn-white btn-animation-1" onClick={handleSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
    );
}