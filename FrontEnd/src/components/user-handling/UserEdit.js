import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from '../../constants/userConsatants'
import '../../CSS/Login.css'

const UserEdit = ({ match, history }) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails

    const userUpdate = useSelector((state) => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/userHandling')
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }

    }, [dispatch, history, userId, user, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, isAdmin }))
    }

    return (
        <div className='mainContainer'>

            <Link to='/admin/userHandling' id='backBtn' className='btn btn-light my-3'>
                <button>
                    Go Back
                </button>
            </Link> <br /> <br />

            <div className='loginTitleContainer'>
                <div className='mainHead'>
                    <h1>Edit User</h1>
                    <p>You can Edit User using this form</p>
                    {loadingUpdate && <Loader/>}
                    {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                </div>
            </div> <br />
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
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
                    /><br /><br />

                    <label for="isAdmin">Is Admin?</label> &nbsp;
                    <input
                        type='checkbox'
                        label='Is Admin'
                        id='isAdmin'
                        className='checkBox'
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    /><br />

                    <div className='updateBtnContainer'>
                        <button type='submit'>Update</button>
                    </div>

                </form>
            )}

        </div>
    )
}

export default UserEdit