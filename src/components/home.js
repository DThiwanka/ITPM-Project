import React from 'react';
import '../CSS/home.css';
import slider1 from '../Images/markus-spiske-DnBtFBnqlRc-unsplash.jpg'
import slider2 from '../Images/ibrahim-boran-zsKFQs2kDpM-unsplash.jpg'
import slider3 from '../Images/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'

function Home() {

  var myIndex = 0;

  function carousel() {
    var i;
    var x = document.getElementsByClassName("sliderImg");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
  }

  return (

    <div className="HomeContainer">

      <div className="homeSector1">
        <div className="main_quotes">
          <h1 className="homeMainText">
            HEALTH & <br />
            WELLNESS <br />
            FOR EVERYONE
          </h1>

          <p> CITY MEDICALS</p>
        </div>
        <div id="homeSlider">
          <img className="sliderImg" src={slider1}/>
        </div>
      </div>

      <div>
        <a href="/check">
          <button type="button" className="btn btn-primary btn-lg btn-block mb-2">Checkout</button>
        </a>
        <a href="/placed">
          <button type="button" className="btn btn-primary btn-lg btn-block mb-2">Placed</button>
        </a>
        <br />
      </div>

    </div>
  );
}

export default Home