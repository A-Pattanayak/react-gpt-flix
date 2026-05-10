import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';
import Footer from './Footer';

const SecondaryContainer = () => {
  const movies= useSelector((store)=>store.movie);
  return (
    movies.nowPlayingMovies && movies.popularMovies &&
    <div className='relative z-10 bg-black'>
      <div className='relative -top-8 z-10 -mb-8 px-4 pb-8 pt-4 text-white sm:px-6 md:-top-24 md:-mb-24 md:px-12 lg:-top-40 lg:-mb-48 lg:px-9'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <Footer />
      </div>
    </div>
  )
}

export default SecondaryContainer
