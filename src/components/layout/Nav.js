import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import classes from './Nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { uiActions } from '../../store/ui-slice';

import UL from '../ui/UL';
import { useEffect } from 'react';
import { setThemeToLS } from '../../store/ui-actions';

let isInitialTheme = true;

const Nav = (props) => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);
  const dispatch = useDispatch();

  const themeIcon = isDarkMode ? faSun : faMoon;

  useEffect(() => {
    if (isInitialTheme) {
      return;
    }

    dispatch(setThemeToLS(isDarkMode ? 'dark' : 'light'));
  }, [dispatch, isDarkMode]);

  const toggleThemeHandler = () => {
    dispatch(uiActions.toggleTheme());
    isInitialTheme = false;
  };

  const navClasses = `${classes.nav} ${
    props.isMobileMedia && classes['nav-mobile']
  } ${props.className || ''}`.trim();

  return (
    <nav className={navClasses}>
      <UL>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/education"
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Education
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? classes.active : '')}
            aria-disabled={({ isActive }) => isActive}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? classes.active : '')}
          >
            Contact
          </NavLink>
        </li>
      </UL>

      <button
        onClick={toggleThemeHandler}
        className={`icon ${classes['theme-toggle-btn']}`}
      >
        <FontAwesomeIcon className="icon" icon={themeIcon} />
      </button>
    </nav>
  );
};

export default Nav;
