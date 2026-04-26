import React from 'react'
import Header from './Header'
import useNowPlaying from './hooks/useNowPlaying';
import MainContainer from './components/MainContainer';
import SecondaryContainer from './components/SecondaryContainer';

const Browse = () => {
    useNowPlaying();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />  



      
    </div>
  )
}

export default Browse
