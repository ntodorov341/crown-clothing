import React from 'react';

import './custom-button.styles.scss';

const CustomButton = (props) => {
    const { label, isGoogleSignIn } = props;
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
        >
            {label}
        </button>
    )
}

export default CustomButton;