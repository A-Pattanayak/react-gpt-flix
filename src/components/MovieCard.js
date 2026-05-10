import React from 'react'
import {posterCDN} from '../utils/CDN';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-32 flex-shrink-0 sm:w-40 md:w-48'>
      <img className='w-full rounded-md' alt='Poster' src={posterCDN+posterPath}></img>
    </div>
  )
}

export default MovieCard
