import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchstatus: false
  },
  reducers: {
    toggleSearch: (state,action) => {
        state.searchstatus = !state.searchstatus;
    }}
});
export default searchSlice.reducer;
export const {toggleSearch} = searchSlice.actions;

