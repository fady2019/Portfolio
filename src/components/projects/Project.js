import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay, faCode } from '@fortawesome/free-solid-svg-icons';

import Button from '../ui/Button';
import Card from '../ui/Card';
import FlexBox from '../ui/FlexBox';

import classes from './Project.module.css';
import { useContext } from 'react';
import ProjectsContext from '../../store/projects-context';

const Project = (props) => {
  const { project } = props;

  const { pushNewTech } = useContext(ProjectsContext);

  const clickTechHandler = (tech) => {
    pushNewTech(tech);
  };

  return (
    <li>
      <Card className={classes.project} padding={false}>
        <FlexBox midScreenFullWidth={true}>
          <img
            className={classes['project-image']}
            src={project.img}
            alt={`${project.title}`}
          />

          <div className={classes['project-detail']}>
            <h3 className={classes['project-title']}>{project.title}</h3>
            <p className={classes['project-description']}>
              {project.description}
            </p>

            <div className={classes['project-technologies']}>
              {project.technologies.map((tech) => (
                <Button
                  className={classes['project-tech']}
                  key={tech}
                  padding={false}
                  border={false}
                  effect={true}
                  onClick={clickTechHandler.bind(null, tech)}
                >
                  {tech}
                </Button>
              ))}
            </div>

            <div className={classes['project-actions']}>
              <Button>
                <a
                  href={project.codeSourceLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} /> Source Code
                </a>
              </Button>

              <Button>
                <a
                  href={project.livePreviewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faDisplay} /> Live Preview
                </a>
              </Button>
            </div>
          </div>
        </FlexBox>
      </Card>
    </li>
  );
};

export default Project;
