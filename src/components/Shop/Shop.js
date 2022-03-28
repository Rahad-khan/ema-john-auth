import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import "./Shop.css";
import Cart from "../summary-cart/Cart";
import {
  addToDB,
  removeCart,
  removeFromDb,
  storedCartDB,
} from "../../utilities/manageDb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  //linked to Order Summary
  const [cartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // display addede cart from local storage after customer leaving site
  useEffect(() => {
    const storedInDb = storedCartDB();
    const savedCart = [];
    for (const id in storedInDb) {
      const product = products.find((product) => product.id === id);
      if (product) {
        const quantity = storedInDb[id];
        product.quantity = quantity;
        savedCart.push(product);
      }
    }
    setCartProduct(savedCart);
  }, [products]);
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
        <Cart cartProduct={cartProduct} reset = {resetCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
