import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import ShimmerUI from './ShimmerUI';

const MovieSuggestion = () => {
  const {movieNames,geminiList,isSearchLoading}=useSelector((store)=>store.search)
  if (isSearchLoading) return <ShimmerUI type="search" />;
  if (!movieNames) return null;
  return (
    <div className='relative z-10 -mt-10 bg-gradient-to-b from-transparent via-black/90 to-black px-4 pb-10 pt-16 text-white sm:px-6 md:px-12'>
    <div>
      {
          movieNames.map((name,index)=><MovieList key={name} title={name} movies={geminiList[index]}   />)
        }
    </div></div>
  )
}

export default MovieSuggestion
