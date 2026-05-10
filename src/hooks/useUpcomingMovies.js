import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovies);

  useEffect(()=>{
    const getUpcomingMovies=async()=>{
      const json= await fetchFromTmdb("/movie/upcoming?page=1");
      if (json?.results) {
        dispatch(addUpcomingMovies(json.results));
      }
    }

    if (!upcomingMovies) {
      getUpcomingMovies();
    }
  },[dispatch, upcomingMovies])}

  export default useUpcomingMovies;
