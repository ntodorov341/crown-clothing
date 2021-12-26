import React from 'react';

import CollectionPreview from '../preview-collection/collection-preview.component';
import SHOP_DATA from '../../pages/shoppage/shop.data';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    return (
        <div className='collections-overview'>
            {
                SHOP_DATA.map(({id, ...collectionProps}) =>(
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
};

export default CollectionsOverview;