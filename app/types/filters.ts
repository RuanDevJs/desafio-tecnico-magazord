export type TAB = "stars" | "repositories";
export type TYPES = "source" | "fork" | "archived" | "mirror";
export type LANGUAGES = "scss" | "java" | "TypeScript" | "JavaScript" | "html" | "css";

export interface IType {
  name: string;
  code: TYPES | "all";
}

export interface ILanguage {
  name: string;
  code: LANGUAGES | "all";
}

export interface IFilters {
  state: {
    type: undefined | IType;
    language: undefined | ILanguage;
  },
  actions: {
    setType: (type: IType | undefined) => void;
    setLanguage: (language: ILanguage | undefined) => void;
  }
}
