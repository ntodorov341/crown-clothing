import React from 'react';
import { useSelector } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../preview-collection/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    const collections = useSelector((state) => selectCollections(state));
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...collectionProps}) =>(
                    <CollectionPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    )
};

export default CollectionsOverview;