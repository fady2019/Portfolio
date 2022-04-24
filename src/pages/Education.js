import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import EducationList from '../components/education/EducationList';

const Education = () => {
  const education = useSelector((state) => state.portfolio.education);

  return (
    <Fragment>
      {/* <h2>Education</h2> */}

      {education.length > 0 ? (
        <EducationList education={education} />
      ) : (
        <h2 className="align-center">There's no education</h2>
      )}
    </Fragment>
  );
};

export default Education;
