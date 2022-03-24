import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='nav-container'>
                <img src={logo} alt="" />
                <div className='nav-items'>
                    <a href="/order">Order</a>
                    <a href="/order-review">Order Review</a>
                    <a href="/manage-inventory">Manage Inventory</a>
                </div>
            </div>
        </div>
        
    );
};

export default Header;