import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log('there was an error signing in... ', error);
        }
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
                <div className='buttons'>
                    <CustomButton
                        type='submit'
                        label='Sign in'
                    />
                    <CustomButton
                        type='button'
                        label='Sign in with Google'
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                    />
                </div>
            </form>
        </div>
    )
};

export default SignIn;