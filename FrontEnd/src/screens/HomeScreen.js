import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Product from "../components/shopping-cart/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function HomeScreen() {

  const dispatch = useDispatch();

  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error} = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homescreen__products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productName={product.productName}
              productDescription={product.productDescription}
              productPrice={product.productPrice}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
