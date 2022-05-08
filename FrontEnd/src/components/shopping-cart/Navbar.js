 import React from 'react'
 import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";
 import "./Navbar.css"
 

 const Navbar = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

   return (
     <div>
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2 style={{ fontSize: 22 }}>CITY MEDICALS</h2>
            </div>

            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cartlogo__badge">{getCartCount()}
                        {/* Cart <span className="cartlogo__badge">{getCartCount()}</span> */}
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="cart__link">
                        <i className="fas fa-solid fa-user"></i>
                    </Link>
                </li>
            </ul>

            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
     </div>
   )
 }
 
 export default Navbar