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
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
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
    <header className="fixed w-full h-16 bg-black bg-opacity-70 flex justify-between items-center px-12 py-3 z-50">
      {/* Netflix Logo */}
      <img 
        className="w-36 cursor-pointer" 
        src={LOGO_NTEFLIX} 
        alt="Netflix Logo" 
        onClick={() => navigate("/browse")}
      />

      {/* Profile & Sign Out */}
      <div className="flex items-center space-x-4">
        {user?.photoURL && (
          <img 
            className="w-10 h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
            src={user.photoURL} 
            alt="User Profile"
          />
        )}
        <button 
          onClick={handleSignOut} 
          className="text-white font-semibold px-4 py-1 rounded bg-red-600 hover:bg-red-700 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;
