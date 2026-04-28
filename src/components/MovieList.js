import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className='mb-8'>
      <h1 className='mb-4 text-2xl font-bold'>{title}</h1>
      <div className='hide-scrollbar flex gap-4 overflow-x-scroll pb-4'>
        {movies?.map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
      </div>
    </div>
  )
}

export default MovieList
