import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';

import { loginSuccess } from '../../../redux/actions/authActions';

import './AuthComponent.scss'

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['token']);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth', { email, password })
      const token = response.data.token
      setCookie('token', token, { path: '/', maxAge: 36000 })
      dispatch(loginSuccess(token));
      navigate('/')
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: '앗..',
        text: '정보가 틀렸습니다.',
      })
      console.error(err);
    }
  }



  return (
    <div className='AuthPage-Body'>
      <div className='AuthPage-Container'>
        <p>Login</p>
        <form className='LoginForm' onSubmit={Login}>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
          <button type='submit'>Login</button>
          <Link to='/signup'>Sign up</Link>
        </form>
      </div>
    </div>
  )
}

export default AuthComponent;
