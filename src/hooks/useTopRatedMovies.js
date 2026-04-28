import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/CDN";
import { addTopRatedMovies } from "../utils/movieSlice";


const useTopRatedMovies = () => {
      const dispatch = useDispatch();
  const getTopRatedMovies=async()=>{
    const response= await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",apiOptions); 
    const json= await response.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=>{
    getTopRatedMovies();
  },[])}

  export default useTopRatedMovies;