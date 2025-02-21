import React, { useRef, useState } from 'react';
import Header from './Header.js';
import { checkValidData } from '../utils/validates.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { LOGIN_BG, USER_AVATAR } from '../utils/consts.js';

const Login = () => {
    const dispatch=useDispatch();
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
                        photoURL : USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName ,photoURL} = auth.currentUser;
                                        dispatch(addUser({ 
                                            uid:uid, 
                                            email:email, 
                                            displayName : displayName, 
                                            photoURL: photoURL 
                                        }));
                        console.log("User profile updated!");
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
                    // console.log(user);
                })
                .catch((error) => {
                    setErrorMessage("Email or password is not matched");
                });
        }
    };

    return (
        <div className='relative w-full h-screen'>
            <Header />
            
            {/* Background Image with Overlay */}
            <div className='absolute top-0 left-0 w-full h-full'>
                <img
                    className='w-full h-full object-cover'
                    src={LOGIN_BG}
                    alt='background_image'
                />
                {/* Dark Overlay */}
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            </div>

            {/* Login Form */}
            <form
                onSubmit={handleButtonClick}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20 w-4/12 text-white bg-black bg-opacity-65 rounded-lg '
            >
                <h1 className='font-bold text-4xl py-6'>{isSigninForm ? "Sign In" : "Sign Up"}</h1>
                {!isSigninForm && (
                    <input
                        ref={name}
                        type='text'
                        placeholder='Name'
                        className='p-6 text-xl my-4 w-full bg-transparent border rounded-md '
                    />
                )}
                <input
                    ref={email}
                    type='text'
                    placeholder='Email or mobile number'
                    className='p-6 my-4 text-xl w-full bg-transparent border rounded-md '
                />
                <input
                    ref={password}
                    type='password'
                    placeholder='Password'
                    className='p-6 my-4 text-xl w-full bg-transparent border rounded-md '
                />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button type='submit' className='p-3 font-medium text-xl bg-red-700 rounded-lg w-full'>
                    {isSigninForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-7 text-2xl cursor-pointer' onClick={toggleSiginForm}>
                    {isSigninForm
                        ? "New to Netflix? Sign up now."
                        : "Already registered? Go to Sign In"}
                </p>
            </form>
        </div>

    );
};

export default Login;