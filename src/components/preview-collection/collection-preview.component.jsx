import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = (props) => {
    const { title, items: products } = props;
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {products
                .filter((product, idx) => idx < 4)
                .map(({ id, ...productProps }) => (
                    <CollectionItem key={id} {...productProps} />
                ))
                }
            </div>
        </div>
    )
};

export default CollectionPreview;