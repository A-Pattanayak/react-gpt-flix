import React from 'react'
import {posterCDN} from '../utils/CDN';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 flex-shrink-0 md:w-48'>
      <img className='w-full rounded-md' alt='Poster' src={posterCDN+posterPath}></img>
    </div>
  )
}

export default MovieCard
