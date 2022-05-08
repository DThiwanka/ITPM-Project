//import react from react library
import React from "react";

//import CSS file
import '../../CSS/medicine.css'

//import icons
import star_ico from '../../Icons/Categories_Icons/star.png'

//import item_imgs
import syringe__img from '../../Images/Item_Images/syringe.png'

const medicalEquipments = () => {
  return (
    <div className="medicine_container">


      {/* Implemeting Filter Part */}
      <div className="filter">

        {/* Filter subcategory */}
        <div className="subcategory_filter">

          <h5>Sub-category</h5>

          <label className="radioLabel">
            <input type="checkbox" /> Tablets
          </label>

          <label className="radioLabel">
            <input type="checkbox" /> Barm
          </label>

          <label className="radioLabel">
            <input type="checkbox" /> Syrup
          </label>

          <label className="radioLabel">
            <input type="checkbox" /> Vitamins
          </label>

          <label className="radioLabel">
            <input type="checkbox" /> Creams
          </label>

          <label className="radioLabel">
            <input type="checkbox" /> Tubes
          </label>

        </div>


        <br />


        {/* Filter Ratings */}
        <div className="Ratings_filter">

          <h5>Ratings</h5>

          <label className="radioLabel">
            <input type="checkbox" /><img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} />
          </label>

          <label className="radioLabel">
            <input type="checkbox" /><img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} />
          </label>

          <label className="radioLabel">
            <input type="checkbox" /><img alt='none' src={star_ico} /> <img alt='none' src={star_ico} /> <img alt='none' src={star_ico} />
          </label>

          <label className="radioLabel">
            <input type="checkbox" /><img alt='none' src={star_ico} /> <img alt='none' src={star_ico} />
          </label>

          <label className="radioLabel">
            <input type="checkbox" /><img alt='none' src={star_ico} />
          </label>

        </div>


      </div>



      {/* Implemeting Item Part */}
      <div className="itemsContainer">

        <div className="categoryTitle">
          <h3>Medical Equipments</h3>
        </div>

        <div className="items">

          <div className="itemBox">
            <tabel>
              <tr>
                <img alt='none' src={syringe__img} />
              </tr>
              <tr>
                <h5>Item Name</h5>
              </tr>
              <tr>
                <p>category</p>
              </tr>
              <tr>
                <p>price</p>
              </tr>
              <tr>
                <button>To Cart</button>
              </tr>
            </tabel>
          </div>

          <div className="itemBox">
            <tabel>
              <tr>
                <img alt='none' src={syringe__img} />
              </tr>
              <tr>
                <h5>Item Name</h5>
              </tr>
              <tr>
                <p>category</p>
              </tr>
              <tr>
                <p>price</p>
              </tr>
              <tr>
                <button>To Cart</button>
              </tr>
            </tabel>
          </div>





        </div>

      </div>

    </div>
  );
};

export default medicalEquipments;