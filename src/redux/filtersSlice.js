import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    updateFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = state => state.filters.name;
export const { updateFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
