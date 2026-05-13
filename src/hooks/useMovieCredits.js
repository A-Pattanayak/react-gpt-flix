import { useEffect, useState } from 'react';
import { fetchFromTmdb } from '../utils/tmdbApi';

const useMovieCredits = (movieId) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) {
      setCast([]);
      return;
    }

    let ignoreResponse = false;

    const getMovieCredits = async () => {
      const credits = await fetchFromTmdb(`/movie/${movieId}/credits?language=en-US`);

      if (!ignoreResponse) {
        setCast(credits?.cast?.slice(0, 8) || []);
      }
    };

    getMovieCredits();

    return () => {
      ignoreResponse = true;
    };
  }, [movieId]);

  return cast;
};

export default useMovieCredits;
