import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useUpcomingMovies = () => {
      const dispatch = useDispatch();
  const getUpcomingMovies=async()=>{
    const json= await fetchFromTmdb("/movie/upcoming?page=1");
    if (json?.results) {
      dispatch(addUpcomingMovies(json.results));
    }
  }
  useEffect(()=>{
    getUpcomingMovies();
  },[dispatch])}

  export default useUpcomingMovies;
