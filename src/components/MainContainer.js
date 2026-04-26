import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
    const movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie=movies?.[0];
    console.log(mainMovie);
    const {original_title,overview} = mainMovie;

  return (
    <div>
      <VideoBG />
      <VideoTitle title={original_title} overview={overview}  /> 
    </div>
  )
}

export default MainContainer
