import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import '../../CSS/Header.css';
// import '../../bootstrap.min.css';


// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, NavDropdown } from "react-bootstrap";

import { logout } from '../../actions/userActions'

const Header = () => {
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <nav className="navContainer">

                <div className="navSector1">
                    <Link to="/"><h2 className="LOGO">CITY MEDICALS</h2></Link>
                    <form className="searchbox">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Pharmacy Items..." aria-label="Search" />
                    </form>
                    <div className="buttonContainer">

                        {userInfo ? (
                            <NavDropdown title={userInfo.name} id='username'>
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>profile</NavDropdown.Item>
                                </LinkContainer> &nbsp;
                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FontAwesomeIcon icon={faUser} /> Sign In
                                </Nav.Link>
                            </LinkContainer>
                        )}
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        {userInfo && userInfo.isAdmin && (
                            <div class="dropdown">
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <a href="/admin/userHandling">Users</a> &nbsp;
                                    <a href="/admin/stockHandling">Products</a>
                                </NavDropdown>
                            </div>
                        )}
                        <div className="cartButton">
                            <Link to='#'><FontAwesomeIcon icon={faCartShopping} /> Cart</Link>
                        </div>
                    </div>

                </div>

                <div className="navSector2">
                    <div className="navigationButtons">
                        <Link to="/"><button className="navButtons">Home</button></Link>
                        <a href="#catContainer"><button className="navButtons">Categories</button></a>
                        <a href="#servId"><button className="navButtons">Services</button></a>
                        <a href="#"><button className="navButtons">Feedback</button></a>
                    </div>
                </div>

            </nav>
        </header>
    );

};

export default Header;
