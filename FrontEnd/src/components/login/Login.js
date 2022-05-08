import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { login } from '../../actions/userActions'
import '../../CSS/Login.css'

const Login = ({ location, history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <div className='mainContainer'>

      <div className='loginTitleContainer'>
        <div className='mainHead'>
          <h1>Login</h1>
          <p>Log in to the system using the form below</p>
        </div>

        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
      </div> <br />

      <form className='loginform' onSubmit={submitHandler}>
        <label for='email'>Email</label><br />
        <input
          type='email'
          placeholder='Enter email'
          id='email'
          className='inputField'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <label for="password">Password</label><br />
        <input
          type='password'
          placeholder='Enter password'
          id='password'
          className='inputField'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <div className='loginBtnContainer'>
          <button type='submit'>Login</button>
        </div>

      </form>

      <div className='newCusPartContainer'>
        <p>
          New Customer?{' '} <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Register </Link>
        </p>
      </div>

    </div>
  )
}

export default Login