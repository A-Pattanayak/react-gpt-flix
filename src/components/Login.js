import React, { useState, useRef } from 'react';
import Validate from '../utils/Validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import auth from '../utils/Firebase';
import Header from './Header';
import { useDispatch } from 'react-redux';
import  {addUser} from '../utils/userSlice';
import { profileLogo } from '../utils/CDN';
import {bg_img} from '../utils/CDN';



const Login = (props) => {
  const dispatch = useDispatch();
  

  const [isSignIn, setIsSignIn] = useState(true);
  const [errmsg, seterrmsg] = useState(null);

  const toggleSignup = () => {
    setIsSignIn((currentState) => !currentState);
  };
  const email= useRef(null);
  const password= useRef(null);
  const name= useRef(null);

  const Validator = () => {
    const message = Validate(
      email.current.value,
      password.current.value,
      isSignIn ? null : name.current.value
    );

    if (message){
        seterrmsg(message)
         return;
    }
    seterrmsg(null);
    if(!isSignIn){
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        
        updateProfile(user, {  
        displayName: name.current.value , photoURL: profileLogo
        }).then(() => {const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
      
          seterrmsg("Signup successful!");
    
      }).catch((error) => {
        console.error("Profile update error: ", error);
      // ...
      });
        
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrmsg(errorCode+"-"+errorMessage);
        // ..
        });


    } else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         seterrmsg("Signin successful!");
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrmsg(errorCode+"-"+errorMessage);
        });   
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Header />  
      <img
        src={bg_img}
        alt="bgimage"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <form className="w-80 rounded-2xl bg-black bg-opacity-75 p-8 text-white" onSubmit={(e) => e.preventDefault()} >
          <h1 className="mb-6 text-3xl font-bold">
            {isSignIn ? 'Sign In' : 'Sign Up'}</h1>


          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="mb-4 w-full rounded-md bg-gray-800 p-3 text-white outline-none"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="mb-4 w-full rounded-md bg-gray-800 p-3 text-white outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-4 w-full rounded-md bg-gray-800 p-3  text-white outline-none"
          />
        <p className="text-red-500 my-1">{errmsg}</p>
          <button
            type="submit" onClick={Validator}
            className="w-full rounded-md bg-red-600 p-3 my-2 font-bold text-white"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <p className="mt-4 cursor-pointer block from-neutral-800" onClick={toggleSignup}>
        {isSignIn ? 'New here? Sign Up Now' : 'Already have an account? Sign In'}
        </p>

        </form>
      </div>
    </div>
  );
};

export default Login;
