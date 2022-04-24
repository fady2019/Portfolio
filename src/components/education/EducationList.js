import FlexBox from '../ui/FlexBox';
import EducationItem from './EducationItem';
import classes from './EducationList.module.css';

const EducationList = (props) => {
  return (
    <FlexBox className={classes['education-list']}>
      {props.education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
      ))}
    </FlexBox>
  );
};

export default EducationList;
