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
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useProduct();
  const [pages, setPages] = useState(0);
  useEffect(()=>{
    fetch("http://localhost:5000/productsCount")
    .then(res => res.json())
    .then(data => {
      const productsCount = data;
      const totalPage = Math.ceil(productsCount / 10); ;
      setPages(totalPage);
    })
  }, [])
  //page count 
  //linked to Order Summary
  const [cartProduct, setCartProduct] = useCart(products);
  // added Product function
  const addedProduct = (selectedProduct) => {
    const exist = cartProduct.find(
      (product) => product._id === selectedProduct._id
    );
    let addedProductToCart = [];
    if (exist) {
      const rest = cartProduct.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      addedProductToCart = [...rest, exist];
    } else {
      selectedProduct.quantity = 1;
      addedProductToCart = [...cartProduct, selectedProduct];
    }
    setCartProduct(addedProductToCart);
    addToDB(selectedProduct._id);
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
              key={product._id}
              addedProduct={addedProduct}
            ></Product>
          ))}
        </div>
        <div className="pagination-container">
        {
          [...Array(pages).keys()].map((number, index) => <button key={index}>{number}</button>)
        }
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
