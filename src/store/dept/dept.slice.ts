import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories, industries } from '../../constants/categories';

const initialState = {
  categoryFilter: {
    id: 0,
    name: 'all works'
  },
  industryFilter: {
    id: 0,
    name: 'all industries'
  }
}

export const deptSlice = createSlice({
  name: 'dept',
  initialState,
  reducers: {
    changeCategoryFilter(state, action: PayloadAction<number>) {
      state.categoryFilter = categories.find(category => category.id === action.payload) || initialState.categoryFilter;
    },
    changeIndustryFilter(state, action: PayloadAction<number>) {
      state.industryFilter = industries.find(industry => industry.id === action.payload) || initialState.industryFilter;
    },
    resetFilters(state) {
      state.categoryFilter = initialState.categoryFilter;
      state.industryFilter = initialState.industryFilter;
    }
  }
})

export const deptActions = deptSlice.actions;
export const deptReducer = deptSlice.reducer;
