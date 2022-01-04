import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = (props) => {
    const { product } = props;
    const { imageUrl, name, price } = product;

    const dispatch = useDispatch();

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton
                label='Add to cart'
                inverted
                onClick={() => dispatch(addItem(product))}
            />
        </div>
    )
};

export default CollectionItem;