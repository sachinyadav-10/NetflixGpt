import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_NTEFLIX, SUPPORTED_LANGUAGE } from '../utils/consts';
import { toggleGptSearchView } from "../utils/gptSearchSlice";
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handelGptSearchClick=()=>{
    // toogle gpt search
    dispatch(toggleGptSearchView());
  }

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
  const handelLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  };
  return (
    <header className="fixed w-screen bg-gradient-to-b from-black flex flex-col md:flex-row justify-between items-center px-8 py-3 z-50">
      {/* Netflix Logo */}
      <img 
        className="w-36 mx-auto md:mx-0 cursor-pointer" 
        src={LOGO_NTEFLIX} 
        alt="Netflix Logo" 
        onClick={() => navigate("/browse")}
      />

      {/* Profile & Sign Out */}
      {user && (
        <div className="flex items-center space-x-4">
          {/* multi language support */}
          <button 
          className="text-white font-semibold py-1 rounded hover:bg-purple-800 transition-colors px-3"
          onClick={handelGptSearchClick}
          >{showGptSearch? "Home":"GPT Search"}</button>
        <button 
          onClick={handleSignOut} 
          className="text-white font-semibold px-3 py-1 rounded hover:bg-red-700 transition-colors"
          >
          Sign Out
        </button>
          {showGptSearch &&(<select className='p-1 px-4 bg-gray-700 text-white'onChange={handelLanguageChange}>
            {SUPPORTED_LANGUAGE.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
          </select>)}
          <img 
            className="hidden md:inline-block w-10 h-10 rounded-lg cursor-pointer hover:opacity-80 transition-opacity" 
            src={user?.photoURL} 
            alt="User Profile"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
