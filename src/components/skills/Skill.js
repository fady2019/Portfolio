import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Card from '../ui/Card';
import Progress from '../ui/Progress';
import classes from './Skill.module.css';
import 'animate.css';

const Skill = (props) => {
  const [showPopover, setShowPopover] = useState(false);

  const { skill } = props;

  const focusSkillHandler = () => {
    setShowPopover(true);
  };

  const blurSkillHandler = () => {
    setShowPopover(false);
  };

  return (
    <Card
      className={`${props.className} ${classes.skill}`}
      onFocus={focusSkillHandler}
      onBlur={blurSkillHandler}
      tabIndex={props.idx}
    >
      <CSSTransition
        in={showPopover}
        timeout={500}
        classNames={{
          enterActive: 'animate__animated animate__fadeIn animate__faster',
          exitActive: 'animate__animated animate__fadeOut animate__faster',
        }}
        mountOnEnter
        unmountOnExit
      >
        <Card className={classes.popover} padding={false}>
          <span>{skill.name}</span>
        </Card>
      </CSSTransition>

      <div className={classes['skill-name']}>{skill.name}</div>
      <Progress className={classes['skill-progress']} barValue={skill.level} />
      <div className={classes['skill-level']}>{skill.level}%</div>
    </Card>
  );
};

export default Skill;
