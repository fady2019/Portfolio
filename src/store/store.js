import { configureStore } from '@reduxjs/toolkit';

import portfolioSlice from './portfolio-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, portfolio: portfolioSlice.reducer },
});

export default store;
