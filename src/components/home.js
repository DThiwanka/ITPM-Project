import React from 'react'

function home() {
  return (
    <div>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>
      <h1>Test Test Test</h1><br/>

    <div className="col-md-8 offset-md-2 mb-5 mt-5">
      {/* Checkout */}
      <a href="/check">
      <button type="button" className="btn btn-primary btn-lg mb-2 mr-3">Checkout</button> 
      </a>

      {/* Placed */}
      <a href="/placed">
      <button type="button" className="btn btn-primary btn-lg mb-2 mr-3">Placed</button> 
      </a>

      {/* orderdetails */}
      <a href="/orderdetails">
      <button type="button" className="btn btn-primary btn-lg mb-2 mr-3">Order details</button> 
      </a>

      {/* Login */}
      <a href="/login">
      <button type="button" className="btn btn-primary btn-lg mb-2 mr-3">Login</button> 
      </a>

      {/* Cart */}
      <a href="/cart">
      <button type="button" className="btn btn-primary btn-lg mb-2">Cart</button> 
      </a>
      <br/>
      </div>
    </div>
  );
}

export default home