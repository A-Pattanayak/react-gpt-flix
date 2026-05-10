import React from 'react'
import {posterCDN} from '../utils/CDN';

const MovieCard = ({posterPath, isPriority = false}) => {
  return (
    <div className='w-32 flex-shrink-0 sm:w-40 md:w-48'>
      <img
        className='w-full rounded-md'
        alt='Poster'
        src={posterCDN+posterPath}
        loading={isPriority ? 'eager' : 'lazy'}
        fetchPriority={isPriority ? 'high' : 'auto'}
        decoding='async'
      ></img>
    </div>
  )
}

export default MovieCard
