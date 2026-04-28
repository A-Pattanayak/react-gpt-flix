import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movie);
  return (
    movies.nowPlayingMovies && movies.popularMovies &&
    <div className='relative z-10 bg-black'>
      <div className='relative -top-10 z-10 -mb-10 px-6 pb-8 pt-4 text-white md:-top-24 md:-mb-24 md:px-12 lg:-top-40 lg:-mb-48 lg:px-9'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
