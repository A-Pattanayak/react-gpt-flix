import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/CDN";
import { addUpcomingMovies } from "../utils/movieSlice";


const useUpcomingMovies = () => {
      const dispatch = useDispatch();
  const getUpcomingMovies=async()=>{
    const response= await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",apiOptions); 
    const json= await response.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(()=>{
    getUpcomingMovies();
  },[])}

  export default useUpcomingMovies;