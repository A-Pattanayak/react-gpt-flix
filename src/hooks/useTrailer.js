import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/CDN";
import { addTrailer } from "../utils/movieSlice";


const useTrailer=(movieId)=>{

    const dispatch = useDispatch(); 
    const trailerFetch=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US',apiOptions);
    const json = await data.json();
    console.log(json);
    const filterData=json.results.filter((video)=>video.type==='Trailer')
    const trailer= filterData?(filterData[0]):json.results[0];
    console.log(trailer);
    dispatch(addTrailer(trailer));

  }
  useEffect(()=>{
    trailerFetch();
  },[])
}

  export default useTrailer