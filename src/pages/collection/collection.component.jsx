import React from 'react';
import { useParams } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.styles.scss';

const CollectionPage = () => {
    const params = useParams();
    const collectionId = params.collectionId;
    return (
        <div className='collection-page'>
            <h2>COLLECTION PAGE</h2>
        </div>
    )
};

export default CollectionPage;