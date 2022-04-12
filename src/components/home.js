import React from 'react';
import '../CSS/home.css';

function Home() {
  return (
    
    <div className="HomeContainer">

      <div classname="main_quotes">
        <h1>
          HEALTH & <br/>
          WELLNESS <br/>
          FOR EVERYONE
        </h1>

        <p> CITY MEDICALS</p>
      </div>


      <div>
        <a href="/check">
        <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Checkout</button> 
        </a>
        <a href="/placed">
        <button type="button" class="btn btn-primary btn-lg btn-block mb-2">Placed</button> 
        </a>
        <br/>
      </div>

    </div>
  );
}

export default Home