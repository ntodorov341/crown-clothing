import React from 'react';

import "./menu-item.styles.scss";

const MenuItem = (props) => {
    const { title, imageUrl, size } = props;

    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})`}}
            />
            <div className="content-container">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;