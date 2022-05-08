import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { register } from '../../actions/userActions'
import '../../CSS/Login.css'

const Register = ({ location, history }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }

  return (
    <div className='mainContainer'>

      <div className='loginTitleContainer'>
        <div className='mainHead'>
          <h1>REGISTER</h1>
          <p>Register to the system using the form below</p>
        </div>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
      </div> <br />

      <form className='loginform' onSubmit={submitHandler}>
        <label for='name'>Name</label><br />
        <input
          type='name'
          placeholder='Enter name'
          id='name'
          className='inputField'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

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

        <label for="confirmPassword">Confirm Password</label><br />
        <input
          type='password'
          placeholder='Confirm password'
          id='confirmPassword'
          className='inputField'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br />

        <div className='loginBtnContainer'>
          <button type='submit'>Register</button>
        </div>

      </form>

      <div className='newCusPartContainer'>
        <p>
          Have an Account{' '} <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> Login </Link>
        </p>
      </div>

    </div>
  )
}

export default Register