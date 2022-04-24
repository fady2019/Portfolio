import React, { useContext } from 'react';
import ProjectsContext from '../../store/projects-context';

import Button from '../ui/Button';
import Card from '../ui/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './ProjectsAnimatedFilterTechs.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css';
import UL from '../ui/UL';

const ProjectsAnimatedFilterTechs = (props) => {
  const { filterTechs, removeTech, clearTechs } = useContext(ProjectsContext);

  const removeTechHandler = (tech) => {
    removeTech(tech);
  };

  const clearTechsHandler = () => {
    clearTechs();
  };

  return (
    <CSSTransition
      in={filterTechs.length > 0}
      timeout={500}
      classNames={{
        enterActive: 'animate__animated animate__zoomIn animate__faster',
        exitActive: 'animate__animated animate__zoomOut animate__faster',
      }}
      mountOnEnter
      unmountOnExit
    >
      <Card
        className={`${props.className} ${classes['projects-filter-techs']}`}
      >
        <Button
          className={classes['techs-clear-btn']}
          onClick={clearTechsHandler}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>

        <TransitionGroup component={UL}>
          {filterTechs.map((tech) => (
            <CSSTransition
              key={tech}
              timeout={500}
              classNames={{
                enterActive:
                  'animate__animated animate__fadeIn animate__faster',
                exitActive:
                  'animate__animated animate__fadeOut animate__faster',
              }}
              mountOnEnter
              unmountOnExit
            >
              <li>
                <Button
                  padding={false}
                  border={false}
                  onClick={removeTechHandler.bind(null, tech)}
                >
                  {tech}
                </Button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Card>
    </CSSTransition>
  );
};

export default ProjectsAnimatedFilterTechs;
