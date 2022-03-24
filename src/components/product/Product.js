import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({product , addedProduct}) => {
    const {img, name, price,seller,ratings} = product
    return (
        <div className='porduct-cart'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <div className='sale-info'>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => addedProduct(product)} className='shop-cart-btn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;