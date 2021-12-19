import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => {
    const { label, inverted, isGoogleSignIn } = props;
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
        >
            {label}
        </button>
    )
}

export default CustomButton;