import { useEffect, useState } from "react";
import { storedCartDB } from "../utilities/manageDb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCartInDb = storedCartDB();
    const savedCart = [];
    const keys = Object.keys(storedCartInDb);

    fetch(`http://localhost:5000/cartProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        console.log(products);
        for (const id in storedCartInDb) {
      const product = products.find((product) => product._id === id);
      if (product) {
        product.quantity = storedCartInDb[id];
        savedCart.push(product);
      }
    }
    setCart(savedCart);
      })
  }, []);
  return [cart, setCart];
};

export default useCart;
