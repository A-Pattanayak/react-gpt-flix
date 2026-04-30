import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const usePopularMovies = () => {
      const dispatch = useDispatch();
  const getPopularMovies=async()=>{
    const json= await fetchFromTmdb("/movie/popular?page=1");
    if (json?.results) {
      dispatch(addPopularMovies(json.results));
    }
  }
  useEffect(()=>{
    getPopularMovies();
  },[dispatch])}

export default usePopularMovies;
