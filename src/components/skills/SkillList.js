import classes from './SkillList.module.css';

import Skill from './Skill';

const formatSkillCategoryName = (category) => {
  const parts = String(category).split('-');
  
  parts.shift();

  return parts.join(" ");
}

const SkillList = (props) => {
    const skillsByCategory = {};

    props.skills.forEach((skill) => {
        const skillCategory = skill.category || '9999999999-others';

        if (!skillsByCategory[skillCategory]) {
            skillsByCategory[skillCategory] = [];
        }

        skillsByCategory[skillCategory].push(skill);
    });

    return (
        <section>
          {
            Object.keys(skillsByCategory).sort().map(cat => (
              <div key={cat}>
                <h3 className={classes['skills-category']}>{ formatSkillCategoryName(cat) }</h3>
                
                <div className={classes['skill-list']}>
                  {skillsByCategory[cat].map((skill, idx) => (
                      <Skill className={classes.skill} idx={idx} key={skill.id} skill={skill} />
                  ))}
                </div>
              </div>
            ))
          }
        </section>
    );
};

export default SkillList;
