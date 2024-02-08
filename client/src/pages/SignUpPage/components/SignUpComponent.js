import React, { useState } from 'react'
import './SignUpComponent.scss'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';

const SignUpComponent = () => {
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
      showSuccessPopup();
      navigate('/auth');
    } catch (err) {
      alert(err.json);
      console.log(err);
    }
  }
  const showSuccessPopup = () => {
    Swal.fire({
      icon: 'success',
      title: '회원가입 성공!',
      text: '회원가입이 성공적으로 완료되었습니다.',
      confirmButtonText: '로그인 하러 가기',
    })
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

export default SignUpComponent;
