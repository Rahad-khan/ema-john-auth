import Product from "../product/Product";
import "./Shop.css";
import Cart from "../summary-cart/Cart";
import {
  addToDB,
  removeCart,
} from "../../utilities/manageDb";
import useCart from "../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Shop = () => {
  const [activePage, setActivePage] = useState(0);
  const [count, setCount] = useState(10);

  //page count 
  const [pages, setPages] = useState(0);
  useEffect(()=>{
    fetch("http://localhost:5000/productsCount")
    .then(res => res.json())
    .then(data => {
      const productsCount = data;
      const totalPage = Math.ceil(productsCount / count); ;
      setPages(totalPage);
    })
  }, [count])
  //load data from db
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${activePage}&count=${count}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [activePage, count]);
  //linked to Order Summary
  const [cartProduct, setCartProduct] = useCart();
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
          {[...Array(pages).keys()].map((number, index) => (
            <button
              className={activePage === number ? "selected" : ""}
              onClick={() => setActivePage(number)}
              key={index}
            >
              {number + 1}
            </button>
          ))}
          <select
            defaultValue={"10"}
            onChange={(e) => setCount(e.target.value)}
            className="page-size"
          >
            <option value="5">5</option>
            <option value="10">
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="summary-container">
        <Cart cartProduct={cartProduct} reset={resetCart}>
          <button
            onClick={() => navigate("/order-review")}
            className="second-button"
          >
            Review Order <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
