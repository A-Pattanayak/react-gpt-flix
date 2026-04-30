import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import {useSelector} from 'react-redux';
import Search from './Search';

const Browse = () => {
    const showSearch = useSelector((store) => store.search.searchstatus);
    useNowPlaying();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  return (
    <div>
      <Header />
      {showSearch ? <Search /> : 
      <>
      <MainContainer />
      <SecondaryContainer /> 
      </>}

    </div>
  )
}

export default Browse
