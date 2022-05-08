import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {toast} from 'react-toastify';

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

toast.configure()

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    // toast.success('Product Added Successfully',{position:toast.POSITION.TOP_CENTER})
    // history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
        <div className="container">
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.imageUrl} alt={product.productName} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.productName}</p>
              <p>Price: Rs.{product.productPrice}</p>
              <p>Description: {product.productDescription}</p>
              <div className="productscreen__right">
                <div className="right__info">
                    <p>
                    Quantity
                    <select value={qty} onChange={(e) => setQty(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <button type="button" onClick={addToCartHandler}>
                      Add To Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.productPrice}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default ProductScreen;
