import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useTopRatedMovies = () => {
      const dispatch = useDispatch();
  const getTopRatedMovies=async()=>{
    const json= await fetchFromTmdb("/movie/top_rated?page=1");
    if (json?.results) {
      dispatch(addTopRatedMovies(json.results));
    }
  }
  useEffect(()=>{
    getTopRatedMovies();
  },[dispatch])}

  export default useTopRatedMovies;
