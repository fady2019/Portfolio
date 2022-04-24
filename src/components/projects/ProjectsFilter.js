import React, { useEffect, useMemo, useState } from 'react';

import Input from '../ui/Input';
import Segment from '../ui/Segment';

import classes from './ProjectsFilter.module.css';

import ProjectsAnimatedFilterTechs from './ProjectsAnimatedFilterTechs';

let isFirstRender = true;

const ProjectsFilter = (props) => {
  const [enteredCat, setEnteredCat] = useState('all');
  const [enteredSearchVal, setEnteredSearchVal] = useState('');

  useEffect(() => {
    if (!isFirstRender) {
      const timeout = setTimeout(() => {
        props.onFilter({ cat: enteredCat, searchVal: enteredSearchVal });
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [enteredCat, enteredSearchVal]);

  const changeSegmentHandler = (category) => {
    setEnteredCat(category);
    isFirstRender = false;
  };

  const changeInputHandler = (e) => {
    setEnteredSearchVal(e.target.value);
    isFirstRender = false;
  };

  const buttons = useMemo(() => {
    return [
      { id: 'all', val: 'All' },
      { id: 'frond-end-mentor', val: 'Frontend Mentor challenges' },
    ];
  }, []);

  return (
    <div className={classes['projects-filter']}>
      <Segment
        className={classes['projects-filter-segment']}
        onChange={changeSegmentHandler}
        buttons={buttons}
        default="all"
      />

      <ProjectsAnimatedFilterTechs
        className={classes['projects-filter-techs']}
      />

      <Input
        className={classes['projects-filter-input']}
        type="text"
        placeholder="Search"
        value={enteredSearchVal}
        onChange={changeInputHandler}
      />
    </div>
  );
};

export default ProjectsFilter;
