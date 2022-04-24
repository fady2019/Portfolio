import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import SkillList from '../components/skills/SkillList';

const Skills = () => {
  const skills = useSelector((state) => state.portfolio.skills);

  return (
    <Fragment>
      {/* <h2>Skills</h2> */}

      {skills.length > 0 ? (
        <SkillList skills={skills} />
      ) : (
        <h2 className="align-center">There's no skills</h2>
      )}
    </Fragment>
  );
};

export default Skills;
