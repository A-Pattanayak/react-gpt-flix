import React from 'react';
import auth from '../utils/Firebase';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import  {addUser,removeUser} from '../utils/userSlice';
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
      <div className="flex items-start justify-between gap-3 px-3 pb-4 pt-5 sm:items-center sm:px-8 sm:pt-6 md:px-12">
        <div className="select-none whitespace-nowrap text-lg font-black uppercase tracking-wide sm:text-2xl md:text-3xl">
          <span className="rounded-md bg-red-600 px-1.5 py-0.5 text-black">Gem</span>
          <span className="ml-1 text-red-600">Flix</span>
        </div>
        {user && (
          <div className="flex max-w-[210px] flex-wrap items-center justify-end gap-1.5 sm:max-w-none sm:gap-3">
            {searchStatus && <select className='rounded-md border-gray-500 bg-gray-700 px-2 py-1.5 text-xs text-white sm:mr-2 sm:rounded-lg sm:text-base' onChange={handleLang}>
              {lang.map((language)=><option key={language.identifier} value={language.identifier}>{language.name}</option>)}
            </select>}
            <button className='rounded-md bg-violet-600 px-2.5 py-1.5 text-xs font-semibold text-white sm:rounded-lg sm:px-4 sm:py-2 sm:text-base' onClick={handleSearch}>
              <span className='sm:hidden'>{searchStatus? 'Home':'Search'}</span>
              <span className='hidden sm:inline'>{searchStatus? 'Homepage':'Search with Gemini'}</span>
            </button>
            <img
              src={user.photoURL || 'https://icons.veryicon.com/png/o/miscellaneous/social-applet-1/user-201.png'}
              alt="Profile"
              className="hidden h-10 w-10 rounded-md object-cover sm:block"
            />
            <button onClick={handleSignOut} className="rounded-md bg-red-700 px-2.5 py-1.5 text-xs font-semibold text-white sm:rounded-lg sm:px-4 sm:py-2 sm:text-base">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
