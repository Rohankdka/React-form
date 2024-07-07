import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <form action="http://localhost:5500/register" encType='true'  method='POST'>
    <div className="container">
    <h2>Register</h2>
    <input type='text' placeholder='Email' name='email' required />
    <input type='text' placeholder='Username' name='username' required />
    <input type='password' placeholder='Password' name='password' required />
    <input type='password' placeholder='Confirm Password' name='confirmpassword' required />
   
    <button type='submit'>Register</button>
  </div>
  </form>
   
  )
}

export default Register
