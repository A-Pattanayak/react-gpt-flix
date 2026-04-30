import { apiOptions } from "./CDN";

const TMDB_API_BASE_URL = "https://api.themoviedb.org/3";

export const fetchFromTmdb = async (path) => {
  try {
    const response = await fetch(`${TMDB_API_BASE_URL}${path}`, apiOptions);

    if (!response.ok) {
      throw new Error(`TMDB request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Unable to fetch movies from TMDB:", error);
    return null;
  }
};
