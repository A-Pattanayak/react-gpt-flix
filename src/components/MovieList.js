import React, { useState } from 'react'
import MovieCard from './MovieCard';
import MovieCardDetail from './MovieCardDetail';

const MovieList = ({title,movies}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className='mb-6 md:mb-8'>
      <h1 className='mb-3 py-2 text-xl font-bold md:mb-4 md:text-2xl'>{title}</h1>
      <div className='hide-scrollbar flex gap-3 overflow-x-scroll pb-4 md:gap-4'>
        {movies?.filter((movie)=>movie.poster_path).map((movie,index)=>(
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            movieTitle={movie.title || movie.original_title}
            onClick={() => setSelectedMovie(movie)}
            isPriority={index < 6}
          />
        ))}
      </div>
      {selectedMovie && (
        <MovieCardDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  )
}

export default MovieList
