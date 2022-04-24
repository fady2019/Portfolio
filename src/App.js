import { useEffect } from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from './store/ui-slice';
import { fetchThemeFromLS } from './store/ui-actions';
import { portfolioActions } from './store/portfolio-slice';

import useHTTP from './hooks/use-http';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Notification from './components/ui/Notification';

import { CSSTransition } from 'react-transition-group';
import 'animate.css';

function App() {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const showNotification = useSelector((state) => state.ui.showNotification);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  const { request, response, isLoading, error } = useHTTP(true);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(uiActions.resizeWindow());
    });

    dispatch(fetchThemeFromLS());
  }, [dispatch]);

  useEffect(() => {
    dispatch(uiActions.setLoadingStatus({ isLoading }));
  }, [dispatch, isLoading]);

  useEffect(() => {
    request({
      url: 'https://fady-emad-portfolio-default-rtdb.europe-west1.firebasedatabase.app/portfolio.json',
      method: 'GET',
    });
  }, [request]);

  useEffect(() => {
    dispatch(portfolioActions.setPortfolio(response));
  }, [dispatch, response]);

  useEffect(() => {
    dispatch(
      uiActions.setNotification({
        message: error,
        error: true,
      })
    );
  }, [dispatch, error]);

  return (
    <div className={`app ${isDarkMode && 'dark-mode'}`}>
      <CSSTransition
        in={showNotification && notification.message.length > 0}
        timeout={500}
        classNames={{
          enterActive:
            'animate__animated animate__bounceInRight animate__faster',
          exitActive:
            'animate__animated animate__bounceOutRight animate__faster',
        }}
        mountOnEnter
        unmountOnExit
      >
        <Notification
          {...notification}
          onClose={() => {
            dispatch(uiActions.removeNotification());
          }}
        />
      </CSSTransition>

      <Header />
      <Main />
      <Footer></Footer>
    </div>
  );
}

export default App;
