//import react from react library
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader_and_message/Message'
import Loader from '../Loader_and_message/Loader'
import { listUsers, deleteUser } from '../../actions/userActions'

//import CSS File
import '../../CSS/stockhandling.css'

//import icons
import pdf_ico from '../../Icons/StockHandling/pdf.png'

const User_handling = ({ history }) => {

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div className="stockHandling_container">

            <div className='headTitle'>
                <h1>User Handling</h1>
            </div>

            <div className='controllerBar'>
                <div className='controllerBar_set'>
                    <div className='stocksearch'>
                        <form className="searchbox">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search User..." aria-label="Search" />
                        </form>
                    </div>
                    <div className='stockButtonContainer'>
                        <button className='pdfBtn'><img alt='none' src={pdf_ico} /></button>
                    </div>
                </div>

            </div>

            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <div className='stockTableContainer'>
                    <table className='stockTable'>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>USER ID</th>
                                <th>USER NAME</th>
                                <th>EMAIL</th>
                                <th>ADMIN</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>   
                            {users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                    <td>
                                        {user.isAdmin ? (<i className='fas fa-check' style={{ color: 'green' }}></i>) : (
                                            <i className='fas fa-times' style={{ color: 'red' }}></i>
                                        )}
                                    </td>
                                    <td>
                                        <Link to={`/admin/user/${user._id}/edit`}>
                                            <button type='button' className='stckChangeBtn'>
                                                <i class="fas fa-edit"></i> Edit
                                            </button>
                                        </Link> &nbsp;
                                        <button type='button' className='stckChangeBtn' onClick={() => deleteHandler(user._id)}>
                                            <i className='fas fa-trash'></i> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            )}



        </div>
    );
};

export default User_handling;
