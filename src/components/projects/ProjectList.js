import classes from './ProjectList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css';

import Project from './Project';
import UL from '../ui/UL';

const ProjectList = (props) => {
  return (
    <TransitionGroup component={UL} className={classes['project-list']}>
      {props.projects.map((project) => (
        <CSSTransition
          key={project.id}
          classNames={{
            enterActive:
              'animate__animated animate__fadeInLeft animate__faster',
            exitActive:
              'animate__animated animate__fadeOutRight animate__faster',
          }}
          timeout={500}
        >
          <Project project={project} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ProjectList;
