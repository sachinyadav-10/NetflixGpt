import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_NTEFLIX } from '../utils/consts';

const Header = () => {
  
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName ,photoURL} = user;
            dispatch(addUser({ 
                uid:uid, 
                email:email, 
                displayName : displayName, 
                photoURL: photoURL 
            })
        );
        navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    }); 
       // Cleanup function to unsubscribe from the listener
       return () => unsubscribe();
      }, [dispatch, navigate]);
  return (
    <div className='w-screen flex justify-between px-8 py-2 z-10 bg-gradient-to-b from-black absolute'>
      <img 
        className='max-w-56 mx-36 my-1' 
        src={LOGO_NTEFLIX}
        alt='Netflix Logo'
      />
      <div className='p-2 flex'>
        {user?.photoURL && (
          <img 
            className='w-12 h-12 rounded-lg' 
            src={user.photoURL} 
            alt="User Profile"
          />
        )}
        <button onClick={handleSignOut} className='font-bold text-white px-2'>(Sign Out)</button>
      </div>
    </div>
  );
};

export default Header;