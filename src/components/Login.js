import React from 'react'
import { Link } from 'react-router-dom';
import image from '../images/VectoRent.png'

export default function Login(){
    const [formData, setFormData] = React.useState(
        {
            user : " ",
            pass : " "
        }
    )
    const [validation,setValidation] = React.useState(true)
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        const validations = formData.user === "Vedant" && formData.pass === "qwerty"
        if (validations) {
            alert("Login Successful")
            setValidation(true);
            
        } else {   
            setValidation(false);
        }
      }
      
    console.log(formData)
    return (
        <div className='login-div'>
            <form className='login-form'>
                <img className='login-image'  src={image} alt=''></img>
                <div className='form-username'>
                    <label>Username : </label>
                    <input type="text" name="user"  onChange={handleChange}  required />
                </div>
                <div className='form-password'>
                    <label>Password : </label>
                    <input type="password" name="pass" onChange={handleChange}  required />
                </div>
                <div className="box">
                    <Link to="#" className="btn btn-white btn-animation-1" onClick={handleSubmit}>Login</Link>
                </div>
                {!validation && <p>Invalid Username or Password</p>}
            </form>
            <div className="box">
                <Link to="/signup" className="btn btn-white btn-animation-1" >Sign Up</Link>
            </div>
        </div>
    )
}