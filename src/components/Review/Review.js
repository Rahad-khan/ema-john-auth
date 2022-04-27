import React from "react";
import useCart from "../../hooks/useCart";
import Cart from "../summary-cart/Cart";
import ReviewCart from "../ReviewCart/ReviewCart";
import { removeCart, removeFromDb } from "../../utilities/manageDb";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Review = () => {
  const [cartProduct, setCartProduct] = useCart();
  const navigate = useNavigate();

  const removeProductFromCart = (id) => {
    console.log(id);
    const rests = cartProduct.filter((product) => product._id !== id);
    setCartProduct(rests);
    removeFromDb(id);
  };
  const resetCart = () => {
    setCartProduct([]);
    removeCart();
  };
  return (
    <div className="review-container">
      <div className="review-product">
        {cartProduct.map((pro) => (
          <ReviewCart
            key={pro._id}
            product={pro}
            removeProductFromCart={removeProductFromCart}
          ></ReviewCart>
        ))}
      </div>
      <div className="review-summary-container">
        <Cart reset={resetCart} cartProduct={cartProduct}>
          <button
            onClick={() => navigate('/manage-inventory')}
            className="second-button"
          >
            Proceed Checkout <FontAwesomeIcon icon={faCreditCard} />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
