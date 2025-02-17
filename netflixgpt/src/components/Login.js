import React, { useState } from 'react'
import Header from './Header.js'

const Login = () => {
    const [isSigninForm , setIsSigninForm] = useState(true);
    const toggleSiginForm =()=>{
        setIsSigninForm(!isSigninForm);
    };
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
        <img
            src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg'
            alt='backgorund_image' 
        />
        </div>
        <form className='p-12 w-3/12 text-white my-36 mx-auto bg-opacity-80 right-0 left-0 bg-black absolute'>
            <h1 className='font-bold text-3xl py-4'>{isSigninForm ? "Sign In" :"Sign Up"}</h1>
            {!isSigninForm &&(
            <input 
                type='text' 
                placeholder='Name' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            )}
            <input 
                type='text' 
                placeholder='Email Adderss' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <input 
                type='password' 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700'
            />
            <button className='p-4 my-6 bg-red-700 rounded-lg w-full'>{isSigninForm ? "Sign In" :"Sign Up"}</button>
            <p 
                className='py-4 cursor-pointer' 
                onClick={toggleSiginForm}>
                {isSigninForm 
                ? "New to Netflix? Sign up now." 
                :"Already registered ? Go to Sign In"}
            </p>

        </form>

    </div>
  )
}

export default Login