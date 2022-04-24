import { createSlice } from '@reduxjs/toolkit';

import {
  portfolioSliceInitState,
  portfolioSliceReducers,
} from '../TS/portfolio-slice';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: portfolioSliceInitState,
  reducers: portfolioSliceReducers,
});

export const portfolioActions = portfolioSlice.actions;

export default portfolioSlice;
