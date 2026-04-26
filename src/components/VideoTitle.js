import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='py-60 px-12'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p>{overview}</p>
    <button>Play</button>
    <button>More Info</button>
    </div> 

  )
}

export default VideoTitle
