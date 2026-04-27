import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='relative z-10 w-full bg-gradient-to-r from-black via-black/80 to-transparent px-6 py-32 text-white md:px-12 lg:px-16 lg:py-52'>
      <div className='max-w-2xl'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>{title}</h1>
        <p className='mt-4 max-w-xl text-sm leading-6 text-gray-200 md:text-base'>
          {overview}
        </p>
        <div className='mt-6 flex gap-4'>
          <button className='rounded-md bg-white px-6 py-2 font-semibold text-black transition hover:bg-gray-200'>
            Play
          </button>
          <button className='rounded-md bg-gray-700/80 px-6 py-2 font-semibold text-white transition hover:bg-gray-600/80'>
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
