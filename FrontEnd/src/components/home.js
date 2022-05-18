//import react from react library
import React from 'react';
import { Link } from 'react-router-dom';

//import CSS file
import '../CSS/home.css';

//import sample slider images
// <<<<<<< IT20162382
import slider1 from '../images/Slider_Images/markus-spiske-DnBtFBnqlRc-unsplash.jpg'
// import slider2 from '../images/Slider_Images/ibrahim-boran-zsKFQs2kDpM-unsplash.jpg'
// import slider3 from '../images/Slider_Images/towfiqu-barbhuiya-w8p9cQDLX7I-unsplash.jpg'

// import icons
import user_ico from '../Icons/Home_Steps_Icons/user.png'
import medicine_ico from '../Icons/Home_Steps_Icons/pills.png'
import cart_ico from '../Icons/Home_Steps_Icons/cart.png'
import payment_ico from '../Icons/Home_Steps_Icons/credit-card.png'
import verify_ico from '../Icons/Home_Steps_Icons/verify.png'
import delivery_ico from '../Icons/Home_Steps_Icons/delivery-truck.png'
import verify_black_ico from '../Icons/Category_instruction_Icons/verified.png'

//import category images
import medic_cat_img from '../images/Category_Images/medicine.png'
import babyItems_cat_img from '../images/Category_Images/baby_items.png'
import beauty_cat_img from '../images/Category_Images/beauty.png'
import localMedic_cat_img from '../images/Category_Images/local_medicine.png'
import equipments_cat_img from '../images/Category_Images/medical_equipments.png'
import fitness_cat_img from '../images/Category_Images/fitness_and_supplements.png'

function home() {

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
              <Link to="/medicine">
                <img src={medic_cat_img} />
                <h4>Medicine</h4>
              </Link>
            </div>

            <div className="categoryBox">
              <a href="/baby_items">
                <img src={babyItems_cat_img} />
                <h4>Baby Items</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="/beauty">
                <img src={beauty_cat_img} />
                <h4>Beauty</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="/localMedicine">
                <img src={localMedic_cat_img} />
                <h4>Local Medicine</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="/medical_equipments">
                <img src={equipments_cat_img} />
                <h4>Medical Equipments</h4>
              </a>
            </div>

            <div className="categoryBox">
              <a href="/fitness_supplements">
                <img src={fitness_cat_img} />
                <h4>Fitness & Supplements</h4>
              </a>
            </div>
          </div>


          {/* For Instruction */}
          <div className="instructionContainer">
            <img src={verify_black_ico} /><p>Use the category section to search for required medicines or other materials. We kindly inform you that we have made this reservation for the convenience of the
              customers who come to us.</p>
          </div>

        </div>
      </div>

      {/* Ended Categories view implementing */}



      {/* Starting Services view implementing */}
      <div id="servId" className="servicesContainer">

        <div className="cateTitle">
          <h3><u>SERVICES</u></h3>
        </div>

        <div className="service">
          <h4>Our Story</h4>
          <p>City Medicals (Pvt) Ltd, is an online portal, which is a company duly incorporated in the Democratic Socialist Republic of Sri Lanka under the Companies Act
            No.7 of 2007 bearing Registration No.62637 and having its registered office at Ground floor, No.10 Jesmin Road, Kande Waththa, Kandy.</p>
        </div>

        <div className="service">
          <h4>Our Service</h4>
          <p>The ageing of the population, technological advances, new public health threats, evolving patients expectations and shrinking budget are putting under pressure
            health care systems in Europe and beyond. An increasing portion of health care expenditure is on pharmaceutical and chronic diseases. All these factors are
            pushing for change. And community pharmacy is changing too to respond to these challenges and meet patients’ needs by shifting the focus from dispensing
            medicines and diseases to patient.</p>
        </div>

        <div className="service">
          <h4>Our Story</h4>
          <p>City Medicals (Pvt) Ltd, is an online portal, which is a company duly incorporated in the Democratic Socialist Republic of Sri Lanka under the Companies Act
            No.7 of 2007 bearing Registration No.62637 and having its registered office at Ground floor, No.10 Jesmin Road, Kande Waththa, Kandy.</p>
        </div>

        <div className="service">
          <h4>Our Service</h4>
          <p>The ageing of the population, technological advances, new public health threats, evolving patients expectations and shrinking budget are putting under pressure
            health care systems in Europe and beyond. An increasing portion of health care expenditure is on pharmaceutical and chronic diseases. All these factors are
            pushing for change. And community pharmacy is changing too to respond to these challenges and meet patients’ needs by shifting the focus from dispensing
            medicines and diseases to patient.</p>
        </div>

      </div>

      {/* Ended Categories view implementing */}


      {/* Another part */}
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
        <br />
      </div>
    </div>
  );
}

export default home