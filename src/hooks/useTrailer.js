import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useTrailer=(movieId)=>{
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerVideos?.[movieId]);

  useEffect(()=>{
    const trailerFetch=async()=>{
      const json = await fetchFromTmdb(`/movie/${movieId}/videos?language=en-US`);

      if (json?.results?.length) {
        const filterData=json.results.filter((video)=>video.type==='Trailer')
        const trailer= filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer({ movieId, trailer }));
      }
    }

    if (movieId && !trailer) {
      trailerFetch();
    }
  },[dispatch, movieId, trailer])
}

  export default useTrailer
