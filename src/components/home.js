//import react from react library
import React from 'react';

//import CSS file
import '../CSS/home.css';

//import sample slider images
import slider1 from '../Images/Slider_Images/markus-spiske-DnBtFBnqlRc-unsplash.jpg'
import slider2 from '../Images/Slider_Images/ibrahim-boran-zsKFQs2kDpM-unsplash.jpg'
import slider3 from '../Images/Slider_Images/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'

// import icons
import user_ico from '../Icons/Home_Steps_Icons/user.png'
import medicine_ico from '../Icons/Home_Steps_Icons/pills.png'
import cart_ico from '../Icons/Home_Steps_Icons/cart.png'
import payment_ico from '../Icons/Home_Steps_Icons/credit-card.png'
import verify_ico from '../Icons/Home_Steps_Icons/verify.png'
import delivery_ico from '../Icons/Home_Steps_Icons/delivery-truck.png'

//import category images
import medic_cat_img from '../Images/Category_Images/medicine.png'
import babyItems_cat_img from '../Images/Category_Images/baby_items.png'
import beauty_cat_img from '../Images/Category_Images/beauty.png'
import localMedic_cat_img from '../Images/Category_Images/local_medicine.png'
import equipments_cat_img from '../Images/Category_Images/medical_equipments.png'
import fitness_cat_img from '../Images/Category_Images/fitness_and_supplements.png'

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
  //   setTimeout(carousel, 5000); // Change image every 5 seconds
  // }

  return (

    <div className="HomeContainer">

      {/* Starting First look view implementing */}
      <div id="hSector1" className="homeSector1">

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
      {/* Ended First look view implementing */}



      {/* Starting Categories view implementing */}
      <div id="catContainer">
        <div className="categoriesContainer">

          <div className="cateTitle">
            <h3><u>CATEGORIES</u></h3>
          </div>

          <div className="categories">

            <div className="categoryBox">
              <a href="#">
                <img src={medic_cat_img} />
                <h4>Medicine</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="#">
                <img src={babyItems_cat_img} />
                <h4>Baby Items</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="#">
                <img src={beauty_cat_img} />
                <h4>Beauty</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="#">
                <img src={localMedic_cat_img} />
                <h4>Local Medicine</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="#">
                <img src={equipments_cat_img} />
                <h4>Medical Equipments</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="#">
                <img src={fitness_cat_img} />
                <h4>Fitness & Supplements</h4>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Ended Categories view implementing */}


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