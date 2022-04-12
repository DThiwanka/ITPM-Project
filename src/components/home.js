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

      {/* Checkout */}
      <a href="/check">
      <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Checkout</button> 
      </a>

      {/* Placed */}
      <a href="/placed">
      <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Placed</button> 
      </a>

      {/* orderdetails */}
      <a href="/orderdetails">
      <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Order details</button> 
      </a>

      {/* Login */}
      <a href="/login">
      <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Login</button> 
      </a>

      {/* Cart */}
      <a href="/cart">
      <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Cart</button> 
      </a>
      <br/>
    </div>
  );
}

export default home