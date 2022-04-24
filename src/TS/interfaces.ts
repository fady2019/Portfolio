export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string[];
  img: string;
  codeSourceLink: string;
  livePreviewLink: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  img: string;
  startDate: Date;
  endDate: Date;
}

export interface PortfolioInterface {
  skills: Skill[];
  education: Education[];
  projects: Project[];
}
