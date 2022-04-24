import classes from './EducationItem.module.css';

import defInstitutionLogo from '../../assets/def-institution.png';
import { useSelector } from 'react-redux';
import Card from '../ui/Card';

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-us', {
    // weekday: 'long',
    year: 'numeric',
    // month: 'short',
    // day: 'numeric',
  });
};

const EducationItem = (props) => {
  const isDarkMode = useSelector((state) => state.ui.isDarkMode);

  const { school, degree, field, startDate, endDate, img } =
    props.educationItem;

  return (
    <Card className={classes['education-item']}>
      <img
        className={`
          ${classes['school-logo']} 
          ${isDarkMode && classes['dark-mode']}
          ${!img && classes['default-logo']}
        `}
        src={img || defInstitutionLogo}
        alt={school}
      />

      <div>
        <h2 className={classes['school-name']}>{school}</h2>
        <p className={classes['school-degree-and-field']}>
          {field} {degree && field && '|'} {degree}
        </p>
        <span className={classes.dates}>
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
      </div>
    </Card>
  );
};

export default EducationItem;
