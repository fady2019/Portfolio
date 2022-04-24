import { Project } from './interfaces';

export interface Filter<T> {
  filterData(): T;
}

export class ProjectsFilter implements Filter<Project[]> {
  constructor(private projects: Project[]) {}

  filterData() {
    return this.projects;
  }
}

abstract class FilterDecorator implements Filter<Project[]> {
  constructor(protected filter: Filter<Project[]>) {}

  filterData() {
    return this.filter.filterData();
  }
}

export class FilterByTitle extends FilterDecorator {
  constructor(private title: string = '', filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (this.title.trim().length === 0) {
      return this.filter.filterData();
    }

    return this.filter
      .filterData()
      .filter((project) =>
        project.title.toLowerCase().includes(this.title.trim().toLowerCase())
      );
  }
}

export class FilterByDescription extends FilterDecorator {
  constructor(private description: string = '', filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (this.description.trim().length === 0) {
      return this.filter.filterData();
    }

    return this.filter
      .filterData()
      .filter((project) =>
        project.description
          .toLowerCase()
          .includes(this.description.trim().toLowerCase())
      );
  }
}

export class FilterByTechnology extends FilterDecorator {
  constructor(private tech: string = '', filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (this.tech.trim().length === 0) {
      return this.filter.filterData();
    }

    return this.filter
      .filterData()
      .filter(
        (project) =>
          project.technologies.findIndex(
            (t) => t.toLowerCase() === this.tech.trim().toLowerCase()
          ) !== -1
      );
  }
}

export class FilterByTechnologies extends FilterDecorator {
  constructor(private techs: string[] = [], filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (this.techs.length === 0) {
      return this.filter.filterData();
    }

    return this.filter
      .filterData()
      .filter((project) =>
        this.techs.every((tech) => project.technologies.includes(tech))
      );
  }
}

export class FilterByCategory extends FilterDecorator {
  constructor(private cat: string = '', filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (
      this.cat.trim().toLowerCase() === 'all' ||
      this.cat.trim().length === 0
    ) {
      return this.filter.filterData();
    }

    return this.filter.filterData().filter((project) => {
      return (
        project.category.findIndex(
          (c) => c.toLowerCase() === this.cat.trim().toLowerCase()
        ) !== -1
      );
    });
  }
}

export class FilterBySearch extends FilterDecorator {
  constructor(private searchVal: string = '', filter: Filter<Project[]>) {
    super(filter);
  }

  filterData() {
    if (this.searchVal.trim() === '') {
      return this.filter.filterData();
    }

    const projects: Project[] = [];

    const filterByTitle = new FilterByTitle(
      this.searchVal,
      this.filter
    ).filterData();

    projects.push(...filterByTitle);

    const filterByDesc = new FilterByDescription(
      this.searchVal,
      this.filter
    ).filterData();

    projects.push(
      ...filterByDesc.filter((p) =>
        projects.every((project) => project.id !== p.id)
      )
    );

    const filterByTech = new FilterByTechnology(
      this.searchVal,
      this.filter
    ).filterData();

    projects.push(
      ...filterByTech.filter((p) =>
        projects.every((project) => project.id !== p.id)
      )
    );

    return projects;
  }
}
