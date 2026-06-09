import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import ShimmerUI from './ShimmerUI';

const MovieSuggestion = () => {
  const {movieNames,geminiList,isSearchLoading,searchError}=useSelector((store)=>store.search)
  if (isSearchLoading) return <ShimmerUI type="search" />;
  const hasVisibleMovieResults = geminiList?.some((movies) =>
    movies?.some((movie) => movie.poster_path)
  );
  const fallbackMessage = searchError || (
    movieNames && !hasVisibleMovieResults
      ? 'Unable to load movies right now. Please check your network or try again.'
      : null
  );

  if (!movieNames && !fallbackMessage) return null;
  return (
    <div className='relative z-10 -mt-10 bg-gradient-to-b from-transparent via-black/90 to-black px-4 pb-10 pt-16 text-white sm:px-6 md:px-12'>
    {fallbackMessage && (
      <div className='mx-auto mb-8 max-w-3xl rounded-md border border-red-500/70 bg-red-950/80 p-4 text-center text-sm font-semibold text-white shadow-lg sm:text-base'>
        {fallbackMessage}
      </div>
    )}
    <div>
      {
          movieNames?.map((name,index)=><MovieList key={name} title={name} movies={geminiList[index]}   />)
        }
    </div></div>
  )
}

export default MovieSuggestion
