import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useNowPlaying = () => {
      const dispatch = useDispatch();
  const getNowPlayingMovies=async()=>{
    const json= await fetchFromTmdb("/movie/now_playing?page=1");
    if (json?.results) {
      dispatch(addMovie(json.results));
    }
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[dispatch])}

export default useNowPlaying;
