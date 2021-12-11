import React from 'react';
import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

const data = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'shop/mens'
    }
];

const Directory = () => {
    const [sections, setSections] = React.useState(data);

    return (
        <div className="directory-menu">
            {
                sections.map(({ title, imageUrl, size }) => (
                    <MenuItem
                        key={imageUrl}
                        title={title.toUpperCase()}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))
            }
        </div>
    )
}

export default Directory;