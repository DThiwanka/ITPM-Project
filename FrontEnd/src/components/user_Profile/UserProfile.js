import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import SuccessMessage from '../Loader_and_message/SuccessMessage'
import Loader from '../Loader_and_message/Loader'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import '../../CSS/Login.css'

const UserProfile = (history) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Password do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }


  return (
    
      <div className='mainContainer'>

          <div className='loginTitleContainer'>
              <div className='mainHead'>
                <h1>USER PROFILE</h1>
                <p>User details & user can update details</p>
              </div>
              {message && <Message variant='danger'>{message}</Message>}
              {error && <Message variant='danger'>{error}</Message>}
              {success && <SuccessMessage variant='success'>User Updated!</SuccessMessage>}
              {success && <audio><source src='../../audios/userUpdated.mp3' type='audio/mpeg' /></audio>}
              {loading && <Loader />}
          </div> <br />

          <form className='loginform' onSubmit={submitHandler}>
              <label for='name'>Name</label><br />
              <input
                  type='name'
                  placeholder='Enter name'
                  id='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              /><br />

              <label for='email'>Email</label><br />
              <input
                  type='email'
                  placeholder='Enter email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              /><br />

              <label for="password">Password</label><br />
              <input
                  type='password'
                  placeholder='Enter password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              /><br />

              <label for="confirmPassword">Confirm Password</label><br />
              <input
                  type='password'
                  placeholder='Confirm password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              /><br />

              <div className='updateBtnContainer'>
                  <button type='submit'>Update</button>
              </div>

          </form>

      </div>
    
    
    )
};

export default UserProfile;
