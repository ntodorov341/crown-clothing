import React from 'react';

import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { useSelector } from 'react-redux';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const itemCount = useSelector(
        (state) => state.cart.cartItems.reduce(
            (accumulatedQuantity, item) => accumulatedQuantity + item.quantity, 0,
        ),
    );
    return (
        <div className='cart-icon'>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
};

export default CartIcon;