import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchstatus: false,
    movieNames:null,
    geminiList:null,
    isSearchLoading: false,
    searchError: null,
  },
  reducers: {
    toggleSearch: (state,action) => {
        state.searchstatus = !state.searchstatus;
    },
    addMovieNames:(state,action)=>{
      const {movieNames,geminiList,searchError=null}=action.payload;
      state.movieNames=movieNames;
      state.geminiList=geminiList;
      state.isSearchLoading=false;
      state.searchError=searchError;
  },
    setSearchLoading:(state,action)=>{
      state.isSearchLoading=action.payload;
      if (action.payload) state.searchError=null;
  },
    setSearchError:(state,action)=>{
      state.searchError=action.payload;
      state.isSearchLoading=false;
  },
}});
export default searchSlice.reducer;
export const {toggleSearch, addMovieNames, setSearchLoading, setSearchError} = searchSlice.actions;
