import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import SHOP_GAMING_DATA from './gaming-shop.data';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_GAMING_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }                
            </div>
        );
    }
}

export default ShopPage;