import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterThemaItemsType, sortingMode, VideoFilterType } from './VideoFilterType';

// Define the initial state
const initialState: VideoFilterType = {
  totalItems: 10,
  sortingMode: 'popular',
  filterThema: [],
  filterText: '',
};

const VideoFilterSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setFilterThema(state, action: PayloadAction<any[]>) {
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

export const { setFilterThema, setFilterText, setSortingMode } = VideoFilterSlice.actions;

export default VideoFilterSlice.reducer;
