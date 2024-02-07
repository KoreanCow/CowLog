import React, { useState } from 'react'
import './SignUpComponents.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUpComponents = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const SignUp = (e) => {
    e.preventDefault();
    try {
      const response = axios.post('http://localhost:5001/api/user', { name, email, password, role })
      console.log(response);
      navigate('/auth');
    } catch (err) {
      alert(err.json);
      console.log(err);
    }
  }

  return (
    <div className='AuthPage-SignUp-Body'>
      <div className='AuthPage-SignUp-Container'>
        <p>Sign Up Page</p>
        <form className='SignUpForm' onSubmit={SignUp}>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='nickname' />
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <input type='text' value={role} onChange={(e) => setRole(e.target.value)} placeholder='admin-code' />
          <button type='submit'>Sign Up</button>
          <Link to='/auth'>Back to Login Page</Link>
        </form>
      </div>
    </div>
  )
}

export default SignUpComponents
