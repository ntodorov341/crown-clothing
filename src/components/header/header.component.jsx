import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
    const currentUser = useSelector(
        (state) => selectCurrentUser(state),
    );
    const hidden = useSelector(
        (state) => selectCartHidden(state),
    );

    const dispatch = useDispatch();

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser ? (
                        <div
                            className='option'
                            onClick={() => auth.signOut()}
                        >
                            SIGN OUT
                        </div>
                    ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )
                }
                <div onMouseEnter={() => dispatch(toggleCartHidden(true))} onMouseLeave={() => dispatch(toggleCartHidden(false))}>
                    <CartIcon />
                </div>
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    )
};

export default Header;