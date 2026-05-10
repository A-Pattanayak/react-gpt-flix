import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovies);

  useEffect(()=>{
    const getTopRatedMovies=async()=>{
      const json= await fetchFromTmdb("/movie/top_rated?page=1");
      if (json?.results) {
        dispatch(addTopRatedMovies(json.results));
      }
    }

    if (!topRatedMovies) {
      getTopRatedMovies();
    }
  },[dispatch, topRatedMovies])}

  export default useTopRatedMovies;
