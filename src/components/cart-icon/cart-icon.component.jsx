import React from 'react';
import { useSelector } from 'react-redux';

import { ReactComponent as ShoppingCart } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const itemCount = useSelector(
        (state) => selectCartItemsCount(state)
    );
    return (
        <div className='cart-icon'>
            <ShoppingCart className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
};

export default CartIcon;