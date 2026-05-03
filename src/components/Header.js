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
import {lang} from '../utils/CDN';
import {changeLanguage} from '../utils/configSlice';


const Header = () => {
  const user = useSelector((store) => store.user);
  const searchStatus= useSelector((store)=>store.search.searchstatus);
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

  const handleLang=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

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
            {searchStatus && <select className='p-1.5 mr-2 bg-gray-700  border-gray-500 text-white rounded-lg' onChange={handleLang}>
              {lang.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
            </select>}
            <button className='bg-violet-600 py-2 px-4 text-white rounded-lg' onClick={handleSearch}>
              {searchStatus? 'Homepage':'Search with Gemini'}
            </button>
            <img
              src={user.photoURL || 'https://icons.veryicon.com/png/o/miscellaneous/social-applet-1/user-201.png'}
              alt="Profile"
              className="h-10 w-10 rounded-md object-cover"
            />
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
