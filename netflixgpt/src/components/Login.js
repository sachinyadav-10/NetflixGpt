import React, { useRef, useState } from 'react';
import Header from './Header.js';
import { checkValidData } from '../utils/validates.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isSigninForm, setIsSigninForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const toggleSiginForm = () => {
        setIsSigninForm(!isSigninForm);
    };

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Sign in / Sign up
        if (!isSigninForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // Update user profile with name
                    updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        console.log("User profile updated!");
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage("Failed to update profile: " + error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage); // Display error to the user
                });
        } else {
            // Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/browse"); // Navigate to /browse after sign-in
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage("Email or password is not matched");
                });
        }
    };

    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img
                    className='min-h-screen min-w-full'
                    src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg'
                    alt='background_image'
                />
            </div>
            <form
                onSubmit={handleButtonClick} // Attach the handler to the form's onSubmit event
                className='p-12 w-3/12 text-white my-36 mx-auto bg-opacity-80 right-0 left-0 bg-black absolute'
            >
                <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                {!isSigninForm && (
                    <input
                        ref={name}
                        type='text'
                        placeholder='Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                )}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button type='submit' className='p-4 my-6 bg-red-700 rounded-lg w-full'>
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSiginForm}>
                    {isSigninForm
                        ? "New to Netflix? Sign up now."
                        : "Already registered? Go to Sign In"}
                </p>
            </form>
        </div>
    );
};

export default Login;