import { useSelector } from 'react-redux';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';
import ShimmerUI from './ShimmerUI';


const MainContainer = () => {
    const movies= useSelector((store)=>store.movie?.nowPlayingMovies);
    const mainMovie=movies?.[0];
    const trailerVideo = useSelector((store)=>store.movie?.trailerVideos?.[mainMovie?.id]);

    if(!movies || !mainMovie) return <ShimmerUI />;

    const {original_title,overview,id,backdrop_path} = mainMovie;

  return (
    <div className='relative isolate overflow-hidden bg-black'>
      <VideoBG movieId={id} backdropPath={backdrop_path}/>
      <VideoTitle title={original_title} overview={overview} trailerKey={trailerVideo?.key}  /> 
    </div>
  )
}

export default MainContainer
