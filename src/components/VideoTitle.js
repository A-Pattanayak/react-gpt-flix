import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='relative z-10 w-full text-white'>
      <div className='md:hidden'>
        <div className='flex min-h-[260px] items-end bg-gradient-to-b from-black/60 via-transparent to-black/75 px-4 pb-5 pt-28'>
          <h1 className='text-2xl font-bold'>{title}</h1>
        </div>
        <div className='bg-black px-4 pb-10 pt-3'>
          <button className='rounded-md border border-white/20 bg-gray-700/80 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/30 backdrop-blur-sm transition hover:bg-gray-600/90 active:scale-95'>
            Play
          </button>
        </div>
      </div>

      <div className='hidden bg-gradient-to-r from-black via-black/80 to-transparent px-12 py-40 md:block lg:px-16 lg:py-52'>
        <div className='max-w-2xl'>
          <h1 className='text-5xl font-bold lg:text-6xl'>{title}</h1>
          <p className='mt-4 max-w-xl text-base leading-6 text-gray-200'>
          {overview}
          </p>
          <div className='mt-6 flex gap-4'>
            <button className='rounded-md border border-white/20 bg-gray-700/80 px-7 py-2.5 font-bold text-white shadow-lg shadow-black/30 backdrop-blur-sm transition hover:bg-gray-600/90 active:scale-95'>
              Play
            </button>
            <button className='rounded-md bg-gray-700/80 px-6 py-2 font-semibold text-white transition hover:bg-gray-600/80'>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
