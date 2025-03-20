import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import image from '../images/VectoRent.png';
import axios from 'axios';

export default function Login(){
    const [formData, setFormData] = useState({
        user: "",  
        pass: ""
    });

    const [validation, setValidation] = useState(true);
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }

      async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/vec/login', {
                email: formData.user,  
                password: formData.pass
            });

            // Successful Login
            if (response.status === 200) {
                alert(`Welcome, ${response.data.name}!`);
                navigate('/home');
            }
        } catch (error) {
            // Failed Login
            console.error('Login Error:', error);
            setValidation(false);
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
                <button type="submit" className='btn btn-white btn-animation-1' onClick={handleSubmit}>
                    Login
                </button>
                </div>

                {!validation && <p>Invalid Username or Password</p>}
            </form>
            
            <div className="box">
                <Link to="/signup" className="btn btn-white btn-animation-1" >Sign Up</Link>
            </div>
        </div>
    )
}