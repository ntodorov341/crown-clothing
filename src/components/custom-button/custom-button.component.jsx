import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => {
    const { type, label } = props;
    return (
        <button className='custom-button'>
            {label}
        </button>
    )
}

export default CustomButton;