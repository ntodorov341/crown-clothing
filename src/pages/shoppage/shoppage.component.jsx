import React from 'react';
import CollectionPreview from '../../components/preview-collection/collection-preview.component.jsx';

import { SHOP_DATA } from './shop.data.js';

const ShopPage = () => {
    return (
        <div className='shop-page'>
            {
                SHOP_DATA.map(({id, ...collectionProps}) =>(
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
};

export default ShopPage;