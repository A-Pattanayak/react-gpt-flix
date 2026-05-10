import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);

  useEffect(()=>{
    const getPopularMovies=async()=>{
      const json= await fetchFromTmdb("/movie/popular?page=1");
      if (json?.results) {
        dispatch(addPopularMovies(json.results));
      }
    }

    if (!popularMovies) {
      getPopularMovies();
    }
  },[dispatch, popularMovies])}

export default usePopularMovies;
