import { useEffect, useState } from "react";
import { storedCartDB } from "../utilities/manageDb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCartInDb = storedCartDB();
    const savedCart = [];
    for (const id in storedCartInDb) {
      const product = products.find((product) => product._id === id);
      if (product) {
        product.quantity = storedCartInDb[id];
        savedCart.push(product);
      }
    }
    setCart(savedCart);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
