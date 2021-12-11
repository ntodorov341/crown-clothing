import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmail('');
        setPassword('');
    }

    const handleChange = (event) => {
        const { value, name } = event.target;

        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    }

    return (
        <div className='sign-in'>
            <h2>
                I already have an account
            </h2>
            <span>
                Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    label='Email'
                    value={email}
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    label='Password'
                    value={password}
                    required
                />
                <CustomButton
                    type='submit'
                    label='Sign In'
                />
            </form>
        </div>
    )
};

export default SignIn;