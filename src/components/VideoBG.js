import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBG = ({movieId}) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailer);
 
  useTrailer(movieId);
  return (  
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="h-full w-full scale-150"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key + "&controls=0&modestbranding=1&rel=0&playsinline=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBG
