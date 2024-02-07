import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authActions'
import { useCookies } from 'react-cookie'

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
    removeCookie('token');
    navigate('/');
  }
  return (
    <div>
      <button onClick={Logout}>
        Logout
      </button>
    </div>
  )
}

export default MyPage
