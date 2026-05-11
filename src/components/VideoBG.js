import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";
import { backdropCDN } from "../utils/CDN";

const VideoBG = ({movieId, backdropPath}) => {
  const trailerVideo=useSelector((store)=>store.movie?.trailerVideos?.[movieId]);
  const videoOrigin = typeof window !== "undefined" ? window.location.origin : "";
 
  useTrailer(movieId);

  return (  
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {backdropPath && (
        <img
          className="h-full w-full scale-110 object-cover opacity-80 md:hidden"
          src={backdropCDN + backdropPath}
          alt=""
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent via-black/75 to-black md:hidden"></div>

      {trailerVideo?.key && (
        <iframe
          className="pointer-events-none hidden h-full w-full scale-150 object-cover md:block"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo.key +
            "?autoplay=1&mute=1&muted=1&loop=1&playlist=" +
            trailerVideo.key +
            "&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&origin=" +
            encodeURIComponent(videoOrigin)
          }
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
}

export default VideoBG
