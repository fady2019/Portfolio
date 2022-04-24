import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false,
  isLoading: true,
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  showNotification: false,
  notification: {
    message: '',
    error: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.isDarkMode = action.payload.theme.toLowerCase() === 'dark';
    },
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setLoadingStatus(state, action) {
      state.isLoading = action.payload.isLoading;
    },
    resizeWindow(state) {
      state.windowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    setNotification(state, action) {
      state.notification.message = action.payload.message;
      state.notification.error = action.payload.error;
      state.showNotification = true;
    },
    removeNotification(state) {
      state.showNotification = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
