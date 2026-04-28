import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/CDN";
import { addPopularMovies } from "../utils/movieSlice";


const usePopularMovies = () => {
      const dispatch = useDispatch();
  const getPopularMovies=async()=>{
    const response= await fetch("https://api.themoviedb.org/3/movie/popular?page=1",apiOptions); 
    const json= await response.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  }
  useEffect(()=>{
    getPopularMovies();
  },[])}

export default usePopularMovies;
