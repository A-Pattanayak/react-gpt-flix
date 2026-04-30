import React from 'react';
import auth from '../utils/Firebase';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import  {addUser,removeUser} from '../utils/userSlice';
import { netflixLogo } from '../utils/CDN';
import {toggleSearch} from '../utils/searchSlice';
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
    navigate('/browse');
  } else {
    dispatch(removeUser());
    navigate('/');
  }
  });

  return () => unsubscribe();
}, [dispatch, navigate])

  const handleSearch = () => {
    dispatch(toggleSearch());
    
  }


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.error('Sign out error: ', error);
      });
  };

  return (
    <header className="absolute left-0 top-0 z-20 w-full bg-gradient-to-b from-black/85 via-black/45 to-transparent">
      <div className="flex items-center justify-between px-4 pt-4 pb-4 sm:px-8 sm:pt-6 sm:pb-5 md:px-12">
        <img
          src={netflixLogo}
          alt="Netflix logo"
          className="h-12 w-36 sm:h-14 md:h-16"
        />
        {user && (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || 'https://icons.veryicon.com/png/o/miscellaneous/social-applet-1/user-201.png'}
              alt="Profile"
              className="h-10 w-10 rounded-md object-cover"
            />
            <button className='bg-violet-600 py-2 px-4 text-white rounded-lg' onClick={handleSearch}>
              Search with Gemini
            </button>
            <button onClick={handleSignOut} className="rounded-lg bg-red-700 px-4 py-2 text-white">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
