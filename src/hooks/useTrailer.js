import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useTrailer=(movieId)=>{

    const dispatch = useDispatch(); 
    const trailerFetch=async()=>{
    const json = await fetchFromTmdb(`/movie/${movieId}/videos?language=en-US`);

    if (json?.results?.length) {
      const filterData=json.results.filter((video)=>video.type==='Trailer')
      const trailer= filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailer(trailer));
    }

  }
  useEffect(()=>{
    if (movieId) {
      trailerFetch();
    }
  },[dispatch, movieId])
}

  export default useTrailer
