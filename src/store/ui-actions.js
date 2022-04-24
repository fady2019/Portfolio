import { uiActions } from './ui-slice';

export const fetchThemeFromLS = () => {
  return (dispatch) => {
    const localStorageInfo =
      JSON.parse(localStorage.getItem('fady-emad-portfolio-309')) || {};

    dispatch(
      uiActions.setTheme({
        theme: localStorageInfo['theme'] || '',
      })
    );
  };
};

export const setThemeToLS = (theme) => {
  return () => {
    const localStorageInfo =
      JSON.parse(localStorage.getItem('fady-emad-portfolio-309')) || {};

    localStorage.setItem(
      'fady-emad-portfolio-309',
      JSON.stringify({
        ...localStorageInfo,
        theme,
      })
    );
  };
};
