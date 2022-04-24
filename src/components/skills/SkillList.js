import classes from './SkillList.module.css';

import Skill from './Skill';
import FlexBox from '../ui/FlexBox';

const SkillList = (props) => {
  return (
    <FlexBox className={classes['skill-list']}>
      {props.skills.map((skill, idx) => (
        <Skill
          className={classes.skill}
          idx={idx}
          key={skill.id}
          skill={skill}
        />
      ))}
    </FlexBox>
  );
};

export default SkillList;
