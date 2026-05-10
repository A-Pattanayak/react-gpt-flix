import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';
import ShimmerUI from './ShimmerUI';


const MainContainer = () => {
    const movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    if(!movies) return <ShimmerUI />;

    const mainMovie=movies?.[0];
    const {original_title,overview,id} = mainMovie;

  return (
    <div className='relative'>
      <VideoBG movieId={id}/>
      <VideoTitle title={original_title} overview={overview}  /> 
    </div>
  )
}

export default MainContainer
