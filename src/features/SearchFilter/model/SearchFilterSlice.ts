import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterThemaItemsType, sortingMode, SearchFilterType } from './SearchFilterType';

// Define the initial state
const initialState: SearchFilterType = {
  totalItems: 10,
  sortingMode: 'popular',
  filterThema: [],
  filterText: '',
};

const SearchFilterSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setFilterThema(state, action: PayloadAction<filterThemaItemsType[]>) {
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
