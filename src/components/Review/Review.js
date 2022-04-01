import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import Cart from '../summary-cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart'
import { removeCart, removeFromDb } from '../../utilities/manageDb';

const Review = () => {
    const [products, setProducts] = useProduct();
    const [cartProduct, setCartProduct] = useCart(products);

    const removeProductFromCart = id => {
      console.log(id);
      const rests = cartProduct.filter(product => product.id !== id);
      setCartProduct(rests)
      removeFromDb(id)
    }
    const resetCart = () => {
      setCartProduct([]);
      removeCart();
    };
    return (
        <div className="review-container">
      <div className="review-product">
        {
            cartProduct.map(pro => <ReviewCart
            key = {pro.id}
            product = {pro}
            removeProductFromCart= {removeProductFromCart}
            ></ReviewCart>)
        }
      </div>
      <div className="review-summary-container">
        <Cart 
        reset={resetCart}
        cartProduct={cartProduct}
        ></Cart>
      </div>
    </div>
    );
};

export default Review;