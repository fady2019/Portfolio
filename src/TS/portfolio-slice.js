"use strict";
exports.__esModule = true;
exports.portfolioSliceReducers = exports.portfolioSliceInitState = void 0;
exports.portfolioSliceInitState = {
    skills: [],
    education: [],
    projects: []
};
exports.portfolioSliceReducers = {
    setPortfolio: function (state, action) {
        state.skills = action.payload.skills;
        state.education = action.payload.education;
        state.projects = action.payload.projects;
    }
};
