import React from 'react'
import { Link } from "react-router-dom";
 import { useSelector } from "react-redux";
import './header.css'
import '../shopping-cart/Navbar.css'

const Header = ({ click }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };
  return (
    <div>
      <div className="m-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <h4>CITY MEDICALS</h4>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <form className="d-flex rl-5">
                  <div className="col-rt-3 equal-height px-5">
                    <div className="sb-example-3">
                      <div className="search__container">
                        <input
                          className="search__input"
                          type="text"
                          placeholder="Search Pharmacy Items..."
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="navbar-nav ms-auto navbar__links">
                <a href="/" className="nav-item nav-link">
                  <i className="fa fa-user fa-2xl px-3 blackiconcolor" aria-hidden="true"></i>
                </a>
                <Link to="/cart" className="cart__link">
                    <div className="icon-container">
                    <i id='cart-icon'
                        className="fa fa-shopping-cart fa-xl px-1 blackiconcolor"
                        aria-hidden="true"
                    ></i>
                    <span className="cartlogo__badge">{getCartCount()}
                    </span>
                    </div>
                </Link>
                <a href="/" className="nav-item nav-link">
                  <i className="fa fa-bars fa-2xl px-3 blackiconcolor" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header
