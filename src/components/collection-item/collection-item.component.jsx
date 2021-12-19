import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = (props) => {
    const { name, imageUrl, price } = props;
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
                <span className='price'>{price}</span>
            </div>
            <CustomButton label='Add to cart' inverted />
        </div>
    )
};

export default CollectionItem;