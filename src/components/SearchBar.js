import {bg_img} from '../utils/CDN';
import lang from '../utils/Langconst';
import {useSelector} from 'react-redux';
import genAI from '../utils/Gemini';
import { useRef } from 'react';
import { apiOptions } from '../utils/CDN';
import {useDispatch} from 'react-redux';
import {addMovieNames} from '../utils/searchSlice';

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
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " + 
      searchText.current.value + 
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Sholay, Don, Deewaar, Zanjeer, Kaala Patthar";
        
    try {
      
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    
      const result = await model.generateContent(gptQuery);
      
    
      const gptMoviesString = result.response.text();
      console.log("Gemini Response:", gptMoviesString);

     
      const gptMoviesArray = gptMoviesString.split(",").map((movie)=>movie.trim());

      const promiseArray= gptMoviesArray.map((movie)=> fetchGeminiMovies(movie));
      const geminiMovies= await Promise.all(promiseArray);
      dispatch(addMovieNames({movieNames:gptMoviesArray,geminiList:geminiMovies}));


    } catch (error) {
      console.error("Gemini API Error:", error);
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
           <form onSubmit={(e)=>e.preventDefault()} className="mx-auto grid w-full max-w-3xl grid-cols-12 rounded-lg bg-black/75 p-2 shadow-xl">
                <input ref={searchText} type='text' className='col-span-8 rounded-md p-4 text-black outline-none md:col-span-9' placeholder={lang[currlang].gptSearchPlaceholder}></input>
                <button onClick={handleGptSearch} type='submit' className='col-span-4 ml-2 rounded-md bg-red-700 px-4 py-2 font-semibold text-white hover:bg-red-800 md:col-span-3'>{lang[currlang].search}</button>
           </form>
        </div></div>
    )

}

export default SearchBar
