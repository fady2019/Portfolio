import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Education from '../../pages/Education';
import Projects from '../../pages/Projects';
import Contact from '../../pages/Contact';

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
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
