//import react from react library
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loader from '../Loader_and_message/Loader'
import Message from '../Loader_and_message/Message'
//import CSS file
import '../../CSS/medicine.css'
//import icons
import star_ico from '../../Icons/Categories_Icons/star.png'


const Medicine = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
          <h3>Medicine</h3>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          // <h3>{error}</h3>
          <Message variant='danger' >{error}</Message>
        ) : (
          <div className="items">

            {products.map(product => (
              <div className="itemBox">
                <tabel>
                  <tr>
                    <img alt='none' src={product.image} />
                  </tr>
                  <tr>
                    <h5>{product.name}</h5>
                  </tr>
                  <tr>
                    <p>{product.category}</p>
                  </tr>
                  <tr>
                    <p className="itemStatus" style={{ color: 'Green' }}>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
                  </tr> <br />
                  <tr>
                    <p className="itemPrice">Rs.{product.price}</p>
                  </tr>
                  <tr>
                    <button type="button" disabled={product.countInStock === 0}>To Cart</button>
                  </tr>
                </tabel>
              </div>
            ))}

          </div>
        )
        }

      </div>

    </div>
  );
};

export default Medicine;
