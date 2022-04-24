import { useCallback, useState } from 'react';

import axios, { AxiosRequestConfig } from 'axios';
import {
  Education,
  PortfolioInterface,
  Project,
  Skill,
} from '../TS/interfaces';

const useHTTP = (initLoadingStatus = false) => {
  const [response, setResponse] = useState<PortfolioInterface>({
    skills: [],
    education: [],
    projects: [],
  });
  const [isLoading, setIsLoading] = useState(initLoadingStatus);
  const [error, setError] = useState('');

  const transformFetchedData = function (data): PortfolioInterface {
    let skills: Skill[] = [];
    if (data.skills) {
      const fetchedSkills = data.skills;
      skills = Object.keys(fetchedSkills).map((id) => {
        return {
          ...fetchedSkills[id],
          id,
        };
      });
    }

    let education: Education[] = [];
    if (data.education) {
      const fetchedEducation = data.education;

      education = Object.keys(fetchedEducation).map((id) => {
        return {
          ...fetchedEducation[id],
          id,
        };
      });
    }

    let projects: Project[] = [];
    if (data.projects) {
      const fetchedProjects = data.projects;

      projects = Object.keys(fetchedProjects).map((id) => {
        return {
          ...fetchedProjects[id],
          id,
          technologies: fetchedProjects[id].technologies
            ? Object.values(fetchedProjects[id].technologies)
            : [],
          category: fetchedProjects[id].category
            ? Object.values(fetchedProjects[id].category)
            : [],
        };
      });
    }

    return {
      skills,
      education,
      projects,
    };
  };

  const request = useCallback(async (config: AxiosRequestConfig) => {
    setIsLoading(true);

    try {
      const request = await axios.request(config);

      const transformedData = transformFetchedData(request.data);

      setResponse(transformedData);
    } catch (error) {
      setError(error.message || error);
    }

    setIsLoading(false);
  }, []);

  const resetError = () => {
    setError('');
  };

  return {
    request,
    response,
    isLoading,
    error,
    resetError,
  };
};

export default useHTTP;
