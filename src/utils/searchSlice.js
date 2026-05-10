import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchstatus: false,
    movieNames:null,
    geminiList:null,
    isSearchLoading: false,
  },
  reducers: {
    toggleSearch: (state,action) => {
        state.searchstatus = !state.searchstatus;
    },
    addMovieNames:(state,action)=>{
      const {movieNames,geminiList}=action.payload;
      state.movieNames=movieNames;
      state.geminiList=geminiList;
      state.isSearchLoading=false;
  },
    setSearchLoading:(state,action)=>{
      state.isSearchLoading=action.payload;
  }
}});
export default searchSlice.reducer;
export const {toggleSearch, addMovieNames, setSearchLoading} = searchSlice.actions;

