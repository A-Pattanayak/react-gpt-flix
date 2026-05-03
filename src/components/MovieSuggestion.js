import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const MovieSuggestion = () => {
  const {movieNames,geminiList}=useSelector((store)=>store.search)
  if (!movieNames) return null;
  return (
    <div className='relative z-10 -mt-10 bg-gradient-to-b from-transparent via-black/90 to-black px-6 pb-10 pt-16 text-white md:px-12'>
    <div>
      {
          movieNames.map((name,index)=><MovieList key={name} title={name} movies={geminiList[index]}   />)
        }
    </div></div>
  )
}

export default MovieSuggestion
