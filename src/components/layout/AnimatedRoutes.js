import React, { Suspense } from 'react';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Main.module.css';
import Loader from '../ui/Loader';

const Home = React.lazy(() => import('../../pages/Home'));
const Skills = React.lazy(() => import('../../pages/Skills'));
const Education = React.lazy(() => import('../../pages/Education'));
const Projects = React.lazy(() => import('../../pages/Projects'));
const Contact = React.lazy(() => import('../../pages/Contact'));

const routes = [
  { path: '', element: <Navigate replace to="/home" /> },
  { path: '/home', element: <Home /> },
  { path: '/skills', element: <Skills /> },
  { path: '/education', element: <Education /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <Navigate replace to="/home" /> },
];

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Suspense fallback={<Loader className={classes.loader} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/">
            {routes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <motion.section
                    style={{ marginBottom: '30px' }}
                    intial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  >
                    {element}
                  </motion.section>
                }
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
