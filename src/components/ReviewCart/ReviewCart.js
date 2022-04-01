import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewCArt.css";

const ReviewCart = ({ product, removeProductFromCart }) => {
  const { name, price, quantity, shipping, img } = product;
  return (
    <div className="review-product-container">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-product-details">
        <div>
          <h3>{name}</h3>
          <p>
            Price : <span className="yellow-span">${price}</span>
          </p>
          <p>
            Shipping Charge : <span className="yellow-span">${shipping}</span>
          </p>
          <p>
            <small>Quantity : {quantity}</small>
          </p>
        </div>
        <button onClick={() => removeProductFromCart(product.id)} className="delete-btn">
          <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default ReviewCart;
