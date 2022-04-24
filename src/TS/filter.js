"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FilterBySearch = exports.FilterByCategory = exports.FilterByTechnologies = exports.FilterByTechnology = exports.FilterByDescription = exports.FilterByTitle = exports.ProjectsFilter = void 0;
var ProjectsFilter = /** @class */ (function () {
    function ProjectsFilter(projects) {
        this.projects = projects;
    }
    ProjectsFilter.prototype.filterData = function () {
        return this.projects;
    };
    return ProjectsFilter;
}());
exports.ProjectsFilter = ProjectsFilter;
var FilterDecorator = /** @class */ (function () {
    function FilterDecorator(filter) {
        this.filter = filter;
    }
    FilterDecorator.prototype.filterData = function () {
        return this.filter.filterData();
    };
    return FilterDecorator;
}());
var FilterByTitle = /** @class */ (function (_super) {
    __extends(FilterByTitle, _super);
    function FilterByTitle(title, filter) {
        if (title === void 0) { title = ''; }
        var _this = _super.call(this, filter) || this;
        _this.title = title;
        return _this;
    }
    FilterByTitle.prototype.filterData = function () {
        var _this = this;
        if (this.title.trim().length === 0) {
            return this.filter.filterData();
        }
        return this.filter
            .filterData()
            .filter(function (project) {
            return project.title.toLowerCase().includes(_this.title.trim().toLowerCase());
        });
    };
    return FilterByTitle;
}(FilterDecorator));
exports.FilterByTitle = FilterByTitle;
var FilterByDescription = /** @class */ (function (_super) {
    __extends(FilterByDescription, _super);
    function FilterByDescription(description, filter) {
        if (description === void 0) { description = ''; }
        var _this = _super.call(this, filter) || this;
        _this.description = description;
        return _this;
    }
    FilterByDescription.prototype.filterData = function () {
        var _this = this;
        if (this.description.trim().length === 0) {
            return this.filter.filterData();
        }
        return this.filter
            .filterData()
            .filter(function (project) {
            return project.description
                .toLowerCase()
                .includes(_this.description.trim().toLowerCase());
        });
    };
    return FilterByDescription;
}(FilterDecorator));
exports.FilterByDescription = FilterByDescription;
var FilterByTechnology = /** @class */ (function (_super) {
    __extends(FilterByTechnology, _super);
    function FilterByTechnology(tech, filter) {
        if (tech === void 0) { tech = ''; }
        var _this = _super.call(this, filter) || this;
        _this.tech = tech;
        return _this;
    }
    FilterByTechnology.prototype.filterData = function () {
        var _this = this;
        if (this.tech.trim().length === 0) {
            return this.filter.filterData();
        }
        return this.filter
            .filterData()
            .filter(function (project) {
            return project.technologies.findIndex(function (t) { return t.toLowerCase() === _this.tech.trim().toLowerCase(); }) !== -1;
        });
    };
    return FilterByTechnology;
}(FilterDecorator));
exports.FilterByTechnology = FilterByTechnology;
var FilterByTechnologies = /** @class */ (function (_super) {
    __extends(FilterByTechnologies, _super);
    function FilterByTechnologies(techs, filter) {
        if (techs === void 0) { techs = []; }
        var _this = _super.call(this, filter) || this;
        _this.techs = techs;
        return _this;
    }
    FilterByTechnologies.prototype.filterData = function () {
        var _this = this;
        if (this.techs.length === 0) {
            return this.filter.filterData();
        }
        return this.filter
            .filterData()
            .filter(function (project) {
            return _this.techs.every(function (tech) { return project.technologies.includes(tech); });
        });
    };
    return FilterByTechnologies;
}(FilterDecorator));
exports.FilterByTechnologies = FilterByTechnologies;
var FilterByCategory = /** @class */ (function (_super) {
    __extends(FilterByCategory, _super);
    function FilterByCategory(cat, filter) {
        if (cat === void 0) { cat = ''; }
        var _this = _super.call(this, filter) || this;
        _this.cat = cat;
        return _this;
    }
    FilterByCategory.prototype.filterData = function () {
        var _this = this;
        if (this.cat.trim().toLowerCase() === 'all' ||
            this.cat.trim().length === 0) {
            return this.filter.filterData();
        }
        return this.filter.filterData().filter(function (project) {
            return (project.category.findIndex(function (c) { return c.toLowerCase() === _this.cat.trim().toLowerCase(); }) !== -1);
        });
    };
    return FilterByCategory;
}(FilterDecorator));
exports.FilterByCategory = FilterByCategory;
var FilterBySearch = /** @class */ (function (_super) {
    __extends(FilterBySearch, _super);
    function FilterBySearch(searchVal, filter) {
        if (searchVal === void 0) { searchVal = ''; }
        var _this = _super.call(this, filter) || this;
        _this.searchVal = searchVal;
        return _this;
    }
    FilterBySearch.prototype.filterData = function () {
        if (this.searchVal.trim() === '') {
            return this.filter.filterData();
        }
        var projects = [];
        var filterByTitle = new FilterByTitle(this.searchVal, this.filter).filterData();
        projects.push.apply(projects, filterByTitle);
        var filterByDesc = new FilterByDescription(this.searchVal, this.filter).filterData();
        projects.push.apply(projects, filterByDesc.filter(function (p) {
            return projects.every(function (project) { return project.id !== p.id; });
        }));
        var filterByTech = new FilterByTechnology(this.searchVal, this.filter).filterData();
        projects.push.apply(projects, filterByTech.filter(function (p) {
            return projects.every(function (project) { return project.id !== p.id; });
        }));
        return projects;
    };
    return FilterBySearch;
}(FilterDecorator));
exports.FilterBySearch = FilterBySearch;
