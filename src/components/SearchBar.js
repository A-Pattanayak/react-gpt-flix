import {bg_img} from '../utils/CDN';
import lang from '../utils/Langconst';
import {useSelector} from 'react-redux';
import genAI from '../utils/Gemini';
import { useRef } from 'react';
import { apiOptions } from '../utils/CDN';
import {useDispatch} from 'react-redux';
import {addMovieNames, setSearchError, setSearchLoading} from '../utils/searchSlice';

const TMDB_SEARCH_TIMEOUT_MS = 10000;

const buildMovieRecommendationPrompt = (query) => `
You are a movie recommendation engine for a TMDB-powered streaming app.

User search: "${query}"

Return exactly 7 real movie titles that best match the user's intent.
Rules:
- If the user mentions a language or region, recommend movies from that language/region.
- If the user mentions a genre, mood, actor, era, or theme, combine all those signals.
- For queries like "hindi horror movies", return actual Hindi horror movie titles.
- Use the title most likely to work in TMDB search, preferably the common English/transliterated release title.
- Do not include web series, explanations, numbering, quotes, brackets, years, or extra text.
- Output only comma-separated movie titles.

Example for "hindi horror movies": Tumbbad, Stree, Bhoot, 13B, Pari, Raaz, Bulbbul
`;

const getMovieNamesFromGeminiText = (moviesText) => {
  return moviesText
    .replace(/\n/g, ',')
    .split(',')
    .map((movie) =>
      movie
        .replace(/^\d+[).:-]?\s*/, '')
        .replace(/^["']|["']$/g, '')
        .trim()
    )
    .filter(Boolean)
    .slice(0, 7);
};

const SearchBar=()=>{
    const dispatch=useDispatch();
    const currlang=useSelector((store)=>store.config.language);
    const searchText=useRef(null);
    const fetchGeminiMovies=async(movie)=>{
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), TMDB_SEARCH_TIMEOUT_MS);

        try {
            const data= await fetch(
                'https://api.themoviedb.org/3/search/movie?query='+encodeURIComponent(movie)+'&include_adult=false&language=en-US&page=1',
                {...apiOptions, signal: controller.signal}
            );

            if (!data.ok) {
                throw new Error(`TMDB request failed with status ${data.status}`);
            }

            const json= await data.json();
            return Array.isArray(json.results) ? json.results : [];
        } catch (error) {
            console.error(`TMDB search failed for "${movie}":`, error);
            return [];
        } finally {
            clearTimeout(timeoutId);
        }

    }
    
   const handleGptSearch = async () => {
    dispatch(setSearchLoading(true));
    const exactMovieQuery = searchText.current.value.trim();
    if (!exactMovieQuery) {
      dispatch(setSearchLoading(false));
      return;
    }
    const gptQuery = buildMovieRecommendationPrompt(exactMovieQuery);
        
    try {
      
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    
      const result = await model.generateContent(gptQuery);
      
    
      const gptMoviesString = result.response.text();
      const gptMoviesArray = getMovieNamesFromGeminiText(gptMoviesString);

      const movieQueries = [exactMovieQuery, ...gptMoviesArray].filter(Boolean);
      const movieNames = [exactMovieQuery ? `Search results for "${exactMovieQuery}"` : null, ...gptMoviesArray].filter(Boolean);
      const promiseArray= movieQueries.map((movie)=> fetchGeminiMovies(movie));
      const geminiMovies= await Promise.all(promiseArray);
      const hasMovieResults = geminiMovies.some((movies) => movies.length > 0);
      dispatch(addMovieNames({
        movieNames,
        geminiList: geminiMovies,
        searchError: hasMovieResults
          ? null
          : 'Unable to load movies right now. Please check your network or try again.'
      }));


    } catch (error) {
      console.error("Gemini API Error:", error);
      dispatch(setSearchError('Unable to get recommendations right now. Please check your network or try again.'));
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
