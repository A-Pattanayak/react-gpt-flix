import React from 'react'

const VideoTitle = ({title, overview, trailerKey}) => {
  const handlePlayTrailer = () => {
    if (!trailerKey) return;
    window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className='relative z-10 w-full text-white'>
      <div className='md:hidden'>
        <div className='flex min-h-[430px] flex-col justify-end bg-gradient-to-b from-black/45 via-transparent to-black px-4 pb-10 pt-28'>
          <h1 className='max-w-[90%] text-3xl font-bold leading-tight'>{title}</h1>
          <button
            onClick={handlePlayTrailer}
            disabled={!trailerKey}
            className='mt-4 w-fit rounded-md border border-white/20 bg-white px-6 py-2.5 text-sm font-bold text-black shadow-lg shadow-black/40 transition hover:bg-gray-200 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60'
          >
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
            <button
              onClick={handlePlayTrailer}
              disabled={!trailerKey}
              className='rounded-md border border-white/20 bg-gray-700/80 px-7 py-2.5 font-bold text-white shadow-lg shadow-black/30 backdrop-blur-sm transition hover:bg-gray-600/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60'
            >
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
