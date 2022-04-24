import { useState } from 'react';
import { useSelector } from 'react-redux';

import classes from './Navbar.module.css';

import Nav from './Nav';
import MenuButton from '../ui/MenuButton';
import { CSSTransition } from 'react-transition-group';

const Navbar = () => {
  const windowSize = useSelector((state) => state.ui.windowSize);

  const { width: windowWidth } = windowSize;

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpened((state) => {
      return !state;
    });
  };

  const MOBILE_SIZE = 768;

  return (
    <div className={classes.navbar}>
      <h1 className={classes.logo}>Portfolio</h1>

      {windowWidth < MOBILE_SIZE && (
        <MenuButton onToggleMenu={toggleMenuHandler} isOpened={isMenuOpened} />
      )}

      {windowWidth >= MOBILE_SIZE ? (
        <Nav isMobileMedia={windowWidth < MOBILE_SIZE} />
      ) : (
        <CSSTransition
          in={isMenuOpened}
          timeout={500}
          classNames={{
            enterActive:
              'animate__animated animate__fadeInRight animate__faster',
            exitActive:
              'animate__animated animate__fadeOutRight animate__faster',
          }}
          mountOnEnter
          unmountOnExit
        >
          <Nav isMobileMedia={windowWidth < MOBILE_SIZE} />
        </CSSTransition>
      )}
    </div>
  );
};

export default Navbar;
