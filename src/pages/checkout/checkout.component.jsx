import React from 'react';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = () => {
    const cartItems = useSelector((state) => selectCartItems(state));
    const cartTotal = useSelector((state) => selectCartTotal(state));

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block' />
            </div>
            {cartItems.map((cartItem) => <CheckoutItem cartItem={cartItem} />)}
            <div className='total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    )
};

export default CheckoutPage;