import React, { Component } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'cards',
                    imageUrl: 'https://photos.zillowstatic.com/p_e/ISr5xqzobhcwfj1000000000.jpg',
                    id: 1,
                    linkUrl: 'shop/cards'
                },
                {
                    title: 'strategy',
                    imageUrl: 'https://photos.zillowstatic.com/p_e/ISr5xqzobhcwfj1000000000.jpg',
                    id: 2,
                    linkUrl: 'shop/strategy'
                },
                {
                    title: 'sports',
                    imageUrl: 'https://photos.zillowstatic.com/p_e/ISr5xqzobhcwfj1000000000.jpg',
                    id: 3,
                    linkUrl: 'shop/sports'
                },
                {
                    title: 'rpg',
                    imageUrl: 'https://photos.zillowstatic.com/p_e/ISr5xqzobhcwfj1000000000.jpg',
                    id: 4,
                    linkUrl: 'shop/rpg',
                    size: 'large'
                },
                {
                    title: 'fps',
                    imageUrl: 'https://photos.zillowstatic.com/p_e/ISr5xqzobhcwfj1000000000.jpg',
                    id: 5,
                    linkUrl: 'shop/fps',
                    size: 'large'
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ id, title, imageUrl, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }
}

export default Directory;