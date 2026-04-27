import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name:'movie',
    initialState: {
        nowPlayingMovies: null,
        trailer: null
    },
    reducers: {
        addMovie: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        }
    }
});
export default movieSlice.reducer;
export const { addMovie,addTrailer } = movieSlice.actions;