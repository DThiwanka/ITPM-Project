//import react from react library
import React from 'react';

import { Link } from 'react-router-dom';

//import CSS File
import '../../CSS/adminHeader.css'

// import icons
import stock_ico from '../../Icons/StockHandling/stockIcon.png'
import order_ico from '../../Icons/StockHandling/orderIcon.png'
import payment_ico from '../../Icons/StockHandling/paymentIcon.png'
import profile_ico from '../../Icons/StockHandling/profileIcon.png'
import home_ico from '../../Icons/StockHandling/Home.png'

const adminHeader = () => {
    return (
        <div className="managerNavigationBar">
            <div className="adminNavButtons">
                <table className='navTable'>
                    <tr>
                        <Link to="/admin/stockHandling">
                            <div className='imgDiv'>
                                <img alt='none' src={stock_ico} />
                            </div>
                            <p>stocks</p>
                        </Link>
                    </tr>
                    <br /><br />

                    <tr>
                        <Link to="#">
                            <div className='imgDiv'>
                                <img alt='none' src={order_ico} />
                            </div>
                            <p>Orders</p>
                        </Link>
                    </tr>
                    <br /><br />

                    <tr>
                        <Link to="#">
                            <div className='imgDiv'>
                                <img alt='none' src={payment_ico} />
                            </div>
                            <p>Payments</p>
                        </Link>
                    </tr>
                    <br /><br />

                    <tr>
                        <Link to="/admin/userHandling">
                            <div className='imgDiv'>
                                <img alt='none' src={profile_ico} />
                            </div>
                            <p>Users</p>
                        </Link>
                    </tr>
                    <br /><br />

                    <tr>
                        <a href="/">
                            <div className='imgDiv'>
                                <img alt='none' src={home_ico} />
                            </div>
                            <p>Home</p>
                        </a>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default adminHeader;
