import {gemini_img} from '../utils/CDN';
import lang from '../utils/Langconst';
import {useSelector} from 'react-redux';

const SearchBar=()=>{
    const currlang=useSelector((store)=>store.config.language);
    return(
        <div className='relative min-h-screen'>
            <img
                src={gemini_img}
                alt="bgimage"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className='absolute inset-0 bg-black/25'></div>
        <div className='relative z-10 pt-[10%]'>
           <form className="w-1/2 bg-black grid mx-auto grid-cols-12  rounded-xl">
                <input type='text' className='p-4 m-4 col-span-9' placeholder={lang[currlang].gptSearchPlaceholder}></input>
                <button type='submit' className='py-2 px-4 m-4 bg-red-700 text-white col-span-3'>{lang[currlang].search}</button>
           </form>
        </div></div>
    )

}

export default SearchBar
