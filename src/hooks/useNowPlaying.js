import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../utils/movieSlice";
import { fetchFromTmdb } from "../utils/tmdbApi";


const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  useEffect(()=>{
    const getNowPlayingMovies=async()=>{
      const json= await fetchFromTmdb("/movie/now_playing?page=1");
      if (json?.results) {
        dispatch(addMovie(json.results));
      }
    }

    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  },[dispatch, nowPlayingMovies])}

export default useNowPlaying;
