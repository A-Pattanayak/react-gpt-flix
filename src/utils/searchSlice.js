import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchstatus: false,
    movieNames:null,
    geminiList:null,
  },
  reducers: {
    toggleSearch: (state,action) => {
        state.searchstatus = !state.searchstatus;
    },
    addMovieNames:(state,action)=>{
      const {movieNames,geminiList}=action.payload;
      state.movieNames=movieNames;
      state.geminiList=geminiList;
  }
}});
export default searchSlice.reducer;
export const {toggleSearch, addMovieNames} = searchSlice.actions;

