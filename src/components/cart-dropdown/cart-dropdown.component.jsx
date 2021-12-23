import React from 'react'
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => selectCartItems(state));

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                    ? cartItems.map((cartItem) => <CartItem key={cartItems.id} item={cartItem} />)
                    : <span className='empty-message'>There is nothing here yet &#128542;</span>
                }
            </div>
            <CustomButton
                label="GO TO CHECKOUT"
                onClick={() => {
                    dispatch(toggleCartHidden());
                    navigate('/checkout');
                }}
            />
        </div>
    )
};

export default CartDropdown;