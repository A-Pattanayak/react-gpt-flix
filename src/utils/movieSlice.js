import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trailerVideos: {}
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;

        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            const { movieId, trailer } = action.payload;
            state.trailerVideos[movieId] = trailer;
        }
    }
});
export default movieSlice.reducer;
export const { addMovie,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies } = movieSlice.actions;
