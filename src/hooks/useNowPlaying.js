import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/CDN";
import { addMovie } from "../utils/movieSlice";


const useNowPlaying = () => {
      const dispatch = useDispatch();
  const getNowPlayingMovies=async()=>{
    const response= await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",apiOptions); 
    const json= await response.json();
    console.log(json);
    dispatch(addMovie(json.results));
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])}

export default useNowPlaying;
