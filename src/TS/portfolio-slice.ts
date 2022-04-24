import { PortfolioInterface } from './interfaces';

export const portfolioSliceInitState: PortfolioInterface = {
  skills: [],
  education: [],
  projects: [],
};

export const portfolioSliceReducers = {
  setPortfolio(state: PortfolioInterface, action) {
    state.skills = action.payload.skills;
    state.education = action.payload.education;
    state.projects = action.payload.projects;
  },
};
