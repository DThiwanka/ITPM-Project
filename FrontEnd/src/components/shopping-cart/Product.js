import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, productDescription, productPrice, productName, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={productName} />

      <div className="product__info">
        <p className="info__name">{productName}</p>

        <p className="info__description">{productDescription.substring(0, 100)}...</p>

        <p className="info__price">Rs.{productPrice}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
