import React from 'react';

import { useDispatch } from 'react-redux';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
    const { cartItem } = props;
    const { name, imageUrl, quantity, price } = cartItem;
    const dispatch = useDispatch();

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div
                    className={cartItem.quantity > 1 ? 'arrow' : 'disabled-arrow'}
                    onClick={() => {
                        if (cartItem.quantity > 1) {
                            dispatch(removeItem(cartItem))}
                        }
                    }
                >
                    &#10094;
                </div>
                    <span className='quantity-value'>{quantity}</span>
                <div
                    className='arrow'
                    onClick={() => dispatch(addItem(cartItem))}
                >
                    &#10095;
                </div>
            </span>
            <span className='price'>
                ${price}
            </span>
            <div
                className='remove-button'
                onClick={() => dispatch(clearItemFromCart(cartItem))}
            >
                &#10005;
            </div>
        </div>
    )
};

export default CheckoutItem;