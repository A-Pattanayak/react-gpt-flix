import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className='mb-6 md:mb-8'>
      <h1 className='mb-3 py-2 text-xl font-bold md:mb-4 md:text-2xl'>{title}</h1>
      <div className='hide-scrollbar flex gap-3 overflow-x-scroll pb-4 md:gap-4'>
        {movies?.filter((movie)=>movie.poster_path).map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
      </div>
    </div>
  )
}

export default MovieList
