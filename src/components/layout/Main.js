import { useSelector } from 'react-redux';

import classes from './Main.module.css';

import AnimatedRoutes from './AnimatedRoutes';

import Container from '../ui/Container';
import Loader from '../ui/Loader';

const Main = () => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <main className={`${classes.main} ${isDarkMode && classes.dark}`}>
      <Container className={classes['main-container']}>
        {isLoading && <Loader className={classes.loader} />}

        {!isLoading && <AnimatedRoutes />}
      </Container>
    </main>
  );
};

export default Main;
