import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css';
import Cart from '../summary-cart/Cart';
import { addToDB, removeFromDb } from '../../utilities/manageDb';


const Shop = () => {
    const [products, setProducts] = useState([]);
    //linked to Order Summary
    const [cartProduct, setCartProduct] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addedProduct = (product) => {
        const addedProductToCart = [...cartProduct, product];
        setCartProduct(addedProductToCart);
        addToDB(product.id);
    }
    return (
        <div className='Shop-container'>
            <div className="product-container">
                <div className='products'>
                {
                    products.map(product => 
                    <Product 
                    product={product}
                    key = {product.id}
                    addedProduct = {addedProduct}
                    ></Product>)
                }
                </div>
            </div>
            <div className="summary-container">
                <Cart cartProduct = {cartProduct}></Cart>
            </div>
        </div>
    );
};

export default Shop;