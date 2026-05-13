import React from 'react'
import {posterCDN} from '../utils/CDN';

const MovieCard = ({posterPath, movieTitle, onClick, isPriority = false}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='w-32 flex-shrink-0 cursor-pointer text-left transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-600 sm:w-40 md:w-48'
      aria-label={`View details for ${movieTitle || 'movie'}`}
    >
      <img
        className='w-full rounded-md'
        alt={movieTitle || 'Movie poster'}
        src={posterCDN+posterPath}
        loading={isPriority ? 'eager' : 'lazy'}
        fetchPriority={isPriority ? 'high' : 'auto'}
        decoding='async'
      ></img>
    </button>
  )
}

export default MovieCard
