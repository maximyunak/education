import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sortingMode, SearchFilterType } from './SearchFilterType';
import { ThemeType } from 'entities/Themes';

// Define the initial state
const initialState: SearchFilterType = {
  totalItems: 10,
  sortingMode: 'updated_at',
  filterThema: [],
  filterText: '',
};

const SearchFilterSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setFilterThema(state, action: PayloadAction<number[]>) {
      state.filterThema = action.payload;
    },
    setFilterText(state, action: PayloadAction<string>) {
      state.filterText = action.payload;
    },
    setSortingMode(state, action: PayloadAction<sortingMode>) {
      state.sortingMode = action.payload;
    },
  },
});

export const { setFilterThema, setFilterText, setSortingMode } = SearchFilterSlice.actions;

export default SearchFilterSlice.reducer;
