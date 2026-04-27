import {useEffect} from "react";
import { apiOptions } from "../utils/CDN";
import {useDispatch} from 'react-redux';
import { addTrailer } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const VideoBG = ({movieId}) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailer);
  const dispatch=useDispatch();
  const trailerFetch=async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/1226863/videos?language=en-US',apiOptions);
    const json = await data.json();
    console.log(json);
    const filterData=json.results.filter((video)=>video.type==='Trailer')
    const trailer= filterData?(filterData[0]):json.results[0];
    console.log(trailer);
    dispatch(addTrailer(trailer));

  }
  useEffect(()=>{
    trailerFetch();
  },[])

  return (  
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/En5QZmL5R1s?si=7KyhdynYGzoXd5h_"+trailerVideo?.key} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
    </div>
  )
}

export default VideoBG
