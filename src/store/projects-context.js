import React from 'react';

const ProjectsContext = React.createContext({
  filterTechs: [],
  pushNewTech: (tech) => {},
  removeTech: (tech) => {},
  clearTechs: () => {},
});

export default ProjectsContext;
