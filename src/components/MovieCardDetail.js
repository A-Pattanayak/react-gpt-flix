import React, { useEffect } from 'react';
import useMovieCredits from '../hooks/useMovieCredits';
import { posterCDN } from '../utils/CDN';

const languageName = (languageCode) => {
  if (!languageCode) return 'Not available';

  try {
    const displayNames = new Intl.DisplayNames(['en'], { type: 'language' });
    return displayNames.of(languageCode) || languageCode.toUpperCase();
  } catch (error) {
    return languageCode.toUpperCase();
  }
};

const MovieCardDetail = ({ movie, onClose }) => {
  const cast = useMovieCredits(movie?.id);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!movie) return null;

  const title = movie.title || movie.original_title || movie.name || 'Movie Details';
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : null;
  const castNames = cast.map((actor) => actor.name).filter(Boolean).join(', ');

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6'>
      <div className='max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-md bg-zinc-900 text-white shadow-xl'>
        <div className='flex items-center justify-between border-b border-zinc-700 px-4 py-3'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <button
            type='button'
            onClick={onClose}
            className='rounded-md bg-zinc-800 px-3 py-1 text-lg font-bold hover:bg-zinc-700'
            aria-label='Close movie details'
          >
            x
          </button>
        </div>

        <div className='flex flex-col gap-5 p-4 md:flex-row md:p-5'>
          {movie.poster_path && (
            <img
              className='w-full rounded-md md:w-56'
              src={posterCDN + movie.poster_path}
              alt={title}
            />
          )}

          <div className='space-y-3 text-sm leading-6 text-gray-200 md:text-base'>
            {releaseYear && <p><span className='font-semibold text-white'>Release Year:</span> {releaseYear}</p>}
            <p><span className='font-semibold text-white'>Language:</span> {languageName(movie.original_language)}</p>
            <p>{movie.overview || 'Overview is not available for this movie.'}</p>
            <p>
              <span className='font-semibold text-white'>Cast:</span>{' '}
              {castNames || 'Cast information is not available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardDetail;
