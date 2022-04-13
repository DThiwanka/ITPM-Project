//import react from react library
import React from 'react';

//import CSS file
import '../CSS/home.css';

//import sample slider images
import slider1 from '../Images/markus-spiske-DnBtFBnqlRc-unsplash.jpg'
import slider2 from '../Images/ibrahim-boran-zsKFQs2kDpM-unsplash.jpg'
import slider3 from '../Images/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'

// import icons
import user_ico from '../Icons/Home_Steps_Icons/user.png'
import medicine_ico from '../Icons/Home_Steps_Icons/pills.png'
import cart_ico from '../Icons/Home_Steps_Icons/cart.png'
import payment_ico from '../Icons/Home_Steps_Icons/credit-card.png'
import verify_ico from '../Icons/Home_Steps_Icons/verify.png'
import delivery_ico from '../Icons/Home_Steps_Icons/delivery-truck.png'

function Home() {

  // var myIndex = 0;
  // carousel();

  // function carousel() {
  //   var i;
  //   var x = document.getElementsByClassName("sliderImg");
  //   for (i = 0; i < x.length; i++) {
  //     x[i].style.display = "none";
  //   }
  //   myIndex++;
  //   if (myIndex > x.length) { myIndex = 1 }
  //   x[myIndex - 1].style.display = "block";
  //   setTimeout(carousel, 2000); // Change image every 2 seconds
  // }

  return (

    <div className="HomeContainer">

      <div className="homeSector1">

        {/* Home main text */}
        <div className="main_quotes">
          <h1 className="homeMainText">
            HEALTH & <br />
            WELLNESS <br />
            FOR EVERYONE
          </h1>

          <p> CITY MEDICALS</p>
        </div>

        {/* Home image slider */}
        <div id="homeSlider">
          <img className="sliderImg" src={slider1} />
          {/* <img className="sliderImg" src={slider2} />
          <img className="sliderImg" src={slider3} /> */}
        </div>

      </div>


      {/* Home user manual steps */}
      <div className="Steps">
        <div className="boxContainers">
          <div className="boxImage">
            <img src={user_ico} />
          </div>
          <h3>Login/Register</h3>
          <p>Initially you want to logging to the system
            or if you are a new comer you want to register
            with the system.</p>
        </div>
        <div className="boxContainers">
          <div className="boxImage">
            <img src={medicine_ico} />
          </div>
          <h3>Choose the necessary medication</h3>
          <p>Choose the right medication for you.
            Misdiagnosis of medication
            can cause you discomfort.</p>
        </div>
        <div className="boxContainers">
          <div className="boxImage">
            <img src={cart_ico} />
          </div>
          <h3>Add them to the cart</h3>
          <p>When Selecting the required medication,
            be sure to add the medication to the cart.</p>
        </div>
        <div className="boxContainers">
          <div className="boxImage">
            <img src={payment_ico} />&nbsp; + &nbsp;<img src={verify_ico} />
          </div>
          <h3>Make the payment & verify</h3>
          <p>Please use a credit or debit card
            when making payments. After You will receive
            a summary from us regarding your order.</p>
        </div>
        <div id="lastBox" className="boxContainers">
          <div className="boxImage">
            <img src={delivery_ico} />
          </div>
          <h3>Delivery to your doorstep</h3>
          <p>We will make sure that your
            order is delivered to you in the shortest
            possible time.</p>
        </div>
      </div>


      {/* Another part */}
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