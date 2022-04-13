import React from "react";
import '../CSS/Header.css';

const Header = () => {
    return (
        <header>
            <nav className="navContainer">

                <div className="navSector1">
                    <a href="/"><h2 className="LOGO">CITY MEDICALS</h2></a>
                    <form className="searchbox">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Pharmacy Items..." aria-label="Search" />
                    </form>
                    <div className="buttonContainer">
                        <div className="userButton">
                            <a href='#'><i className="fa-solid fa-user"></i>User</a>
                        </div>
                        <div className="cartButton">
                            <a href='#'><i className="fa-solid fa-cart-shopping"></i>Cart</a>
                        </div>
                    </div>

                </div>

                <div className="navSector2">
                    <div className="navigationButtons">
                        <a href="/"><button className="navButtons">Home</button></a>
                        <a href="#"><button className="navButtons">Categories</button></a>
                        <a href="#"><button className="navButtons">Services</button></a>
                        <a href="#"><button className="navButtons">Feedback</button></a>
                    </div>
                </div>

            </nav>
        </header>
    );

};

export default Header;
