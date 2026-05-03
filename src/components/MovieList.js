import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className='mb-8'>
      <h1 className='mb-4 py-2 text-2xl font-bold'>{title}</h1>
      <div className='hide-scrollbar flex gap-4 overflow-x-scroll pb-4'>
        {movies?.filter((movie)=>movie.poster_path).map((movie)=>(<MovieCard key={movie.id} posterPath={movie.poster_path}/>))}
      </div>
    </div>
  )
}

export default MovieList
