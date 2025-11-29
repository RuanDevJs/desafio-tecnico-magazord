export interface IData {
  id: string;
  name: string;
  bio: string;
  company: string | null;
  location: string;
  blog: string;
  avatar_url: string;
  html_url: string;
  login: string;
  public_repo: number;
}

export interface IRepositories {
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: string;
  forks: string;
  topics: string[];
  language: string;
}

