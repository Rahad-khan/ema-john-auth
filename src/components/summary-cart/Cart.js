import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { removeFromDb } from "../../utilities/manageDb";

const Cart = ({ cartProduct }) => {
  let price = 0;
  let shipping = 0;
  for (const product of cartProduct) {
    price = price + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = (price + shipping + tax).toFixed(2);
  return (
    <div className="summary">
      <h2>Order Summary</h2>
      <p>Selected Items: {cartProduct.length}</p>
      <p>Total Price: ${price}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <button className="first-button">
        Clear Cart <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <br />
      <button className="second-button">
        Review Order <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
