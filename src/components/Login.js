import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import image from '../images/VectoRent.png';

export default function Login(){
    const [formData, setFormData] = React.useState(
        {
            user : " ",
            pass : " "
        }
    )
    const navigate = useNavigate();
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }

      const [validation,setValidation] = React.useState(true);
      function handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit executed');
        if(formData.user === "Vedant" && formData.pass === "qwerty"){
            navigate('/home');
        }else{
            setValidation(false);
            navigate('#');
        }
      }
      
    // console.log(formData)
    return (
        <div className='login-div'>
            <form className='login-form' onSubmit={handleSubmit}>
                <img className='login-image'  src={image} alt=''></img>
                <div className='form-group'>
                    <label>UserName:</label>
                    <input type="text" name="user" onChange={handleChange} required />
                </div>
                <div className='form-group'>
                    <label>Password:</label>
                    <input type="password" name="pass" onChange={handleChange} required />
                </div>
                <div className="box">
                <Link to={`/${validation ? 'home' : ''}`} className='btn btn-white btn-animation-1' onClick={handleSubmit}>
                    Login
                </Link>
                </div>
                {!validation && <p>Invalid Username or Password</p>}
            </form>
            <div className="box">
                <Link to="/signup" className="btn btn-white btn-animation-1" >Sign Up</Link>
            </div>
        </div>
    )
}