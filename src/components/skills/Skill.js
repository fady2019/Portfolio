import Card from '../ui/Card';
import classes from './Skill.module.css';

const Skill = (props) => {
    const { skill } = props;

    return (
        <Card className={`${props.className} ${classes.skill}`}>
            <div className={classes['skill-name']}>{skill.name}</div>
        </Card>
    );
};

export default Skill;
