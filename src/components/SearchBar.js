import {bg_img} from '../utils/CDN';
import lang from '../utils/Langconst';
import {useSelector} from 'react-redux';
import genAI from '../utils/Gemini';
import { useRef } from 'react';
import { apiOptions } from '../utils/CDN';
import {useDispatch} from 'react-redux';
import {addMovieNames, setSearchLoading} from '../utils/searchSlice';

const SearchBar=()=>{
    const dispatch=useDispatch();
    const currlang=useSelector((store)=>store.config.language);
    const searchText=useRef(null);
    const fetchGeminiMovies=async(movie)=>{
        const data= await fetch('https://api.themoviedb.org/3/search/movie?query='+encodeURIComponent(movie)+'&include_adult=false&language=en-US&page=1',apiOptions);
        const json= await data.json();
        return json.results;

    }
    
   const handleGptSearch = async () => {
    dispatch(setSearchLoading(true));
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " + 
      searchText.current.value + 
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Sholay, Don, Deewaar, Zanjeer, Kaala Patthar";
        
    try {
      
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    
      const result = await model.generateContent(gptQuery);
      
    
      const gptMoviesString = result.response.text();
      const exactMovieQuery = searchText.current.value.trim();
      const gptMoviesArray = gptMoviesString.split(",").map((movie)=>movie.trim());

      const movieQueries = [exactMovieQuery, ...gptMoviesArray].filter(Boolean);
      const movieNames = [exactMovieQuery ? `Search results for "${exactMovieQuery}"` : null, ...gptMoviesArray].filter(Boolean);
      const promiseArray= movieQueries.map((movie)=> fetchGeminiMovies(movie));
      const geminiMovies= await Promise.all(promiseArray);
      dispatch(addMovieNames({movieNames,geminiList:geminiMovies}));


    } catch (error) {
      console.error("Gemini API Error:", error);
      dispatch(setSearchLoading(false));
    }
  };


    return(
        <div className='relative min-h-[52vh] overflow-hidden'>
            <img
                src={bg_img}
                alt="bgimage"
                className="fixed inset-0 z-0 h-screen w-full object-cover"
            />
            <div className='fixed inset-0 z-0 bg-black/65'></div>
        <div className='relative z-10 px-4 pt-32 md:pt-40'>
           <form onSubmit={(e)=>e.preventDefault()} className="mx-auto flex w-full max-w-3xl flex-col gap-2 rounded-lg bg-black/75 p-2 shadow-xl sm:grid sm:grid-cols-12">
                <input ref={searchText} type='text' className='rounded-md p-3 text-black outline-none sm:col-span-8 sm:p-4 md:col-span-9' placeholder={lang[currlang].gptSearchPlaceholder}></input>
                <button onClick={handleGptSearch} type='submit' className='rounded-md bg-red-700 px-4 py-3 font-semibold text-white hover:bg-red-800 sm:col-span-4 sm:py-2 md:col-span-3'>{lang[currlang].search}</button>
           </form>
        </div></div>
    )

}

export default SearchBar
