import { useState } from 'react';

import classes from './Dropdown.module.css';
import CSSTransition from 'react-transition-group/CSSTransition';
import 'animate.css';

import UL from './UL';

const Dropdown = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdownHandler = () => {
    setIsOpened((state) => !state);
  };

  return (
    <div className={`${props.className} ${classes.dropdown}`}>
      <button
        className={classes['dropdown-btn']}
        onClick={toggleDropdownHandler}
      >
        {props.btnContent}
      </button>

      <CSSTransition
        in={isOpened}
        timeout={500}
        classNames={{
          enterActive: 'animate__animated animate__flipInX animate__faster',
          exitActive: 'animate__animated animate__flipOutX animate__faster',
        }}
        mountOnEnter
        unmountOnExit
      >
        <UL className={classes['dropdown-content']}>
          {props.children.map((child, idx) => (
            <li key={idx}>{child}</li>
          ))}
        </UL>
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
