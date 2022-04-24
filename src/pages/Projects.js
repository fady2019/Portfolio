import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import ProjectList from '../components/projects/ProjectList';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import ProjectsContext from '../store/projects-context';

import {
  FilterByCategory,
  FilterBySearch,
  FilterByTechnologies,
  ProjectsFilter as ProFilter,
} from '../TS/filter';

const navigateToPath = (cat, searchVal) =>
  `/projects?${cat && 'cat=' + cat}${searchVal && '&search=' + searchVal}`;

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const cat = searchParams.get('cat') || 'all';
  const search = searchParams.get('search') || '';

  const filterHandler = (filter) => {
    navigate(navigateToPath(filter.cat, filter.searchVal), { replace: false });
  };

  //

  const [filterTechs, setFilterTechs] = useState([]);

  const pushNewTech = (newTech) => {
    const TECHS = [...filterTechs];

    if (!TECHS.find((t) => t.toLowerCase() === newTech.toLowerCase())) {
      TECHS.push(newTech);
      setFilterTechs(TECHS);
    }
  };

  const removeTech = (tech) => {
    const techIdx = filterTechs.findIndex(
      (t) => t.toLowerCase() === tech.toLowerCase()
    );

    if (techIdx !== -1) {
      const TECHS = [...filterTechs];
      TECHS.splice(techIdx, 1);
      setFilterTechs(TECHS);
    }
  };

  const clearTechs = () => {
    setFilterTechs([]);
  };

  //

  const projects = useSelector((state) => state.portfolio.projects);

  const filteredProjects = new FilterByCategory(
    cat,
    new FilterByTechnologies(
      filterTechs,
      new FilterBySearch(search, new ProFilter(projects))
    )
  ).filterData();

  //

  return (
    <ProjectsContext.Provider
      value={{
        filterTechs,
        pushNewTech,
        removeTech,
        clearTechs,
      }}
    >
      {/* <h2>Projects</h2> */}
      <ProjectsFilter onFilter={filterHandler} />

      {filteredProjects.length > 0 ? (
        <ProjectList projects={filteredProjects} />
      ) : (
        <h2 className="align-center">There's no projects</h2>
      )}
    </ProjectsContext.Provider>
  );
};

export default Projects;
