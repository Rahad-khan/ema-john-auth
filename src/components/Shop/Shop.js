import Product from "../product/Product";
import "./Shop.css";
import Cart from "../summary-cart/Cart";
import {
  addToDB,
  removeCart,
} from "../../utilities/manageDb";
import useProduct from "../../hooks/useProduct";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useProduct();
  //linked to Order Summary
  const [cartProduct, setCartProduct] = useCart(products);
  // added Product function
  const addedProduct = (selectedProduct) => {
    const exist = cartProduct.find(
      (product) => product.id === selectedProduct.id
    );
    let addedProductToCart = [];
    if (exist) {
      const rest = cartProduct.filter(
        (product) => product.id !== selectedProduct.id
      );
      exist.quantity = exist.quantity + 1;
      addedProductToCart = [...rest, exist];
    } else {
      selectedProduct.quantity = 1;
      addedProductToCart = [...cartProduct, selectedProduct];
    }
    setCartProduct(addedProductToCart);
    addToDB(selectedProduct.id);
  };
  const resetCart = () => {
    setCartProduct([]);
    removeCart();
  };
  const navigate = useNavigate();
  return (
    <div className="Shop-container">
      <div className="product-container">
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addedProduct={addedProduct}
            ></Product>
          ))}
        </div>
      </div>
      <div className="summary-container">
        <Cart cartProduct={cartProduct} reset = {resetCart}>
        <button
        onClick={() => navigate('/order-review')}
        className="second-button">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
