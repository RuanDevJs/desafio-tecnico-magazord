import { create } from "zustand";
import { IFilters } from "../types/filters";

const useFilters = create<IFilters>((set) => ({
  state: {
    language: undefined,
    type: undefined
  },
  actions: {
    setLanguage: (language) => set((store) => ({ state: ({ ...store.state, language }) })),
    setType: (type) => set((store) => ({ state: ({ ...store.state, type }) })),
  }
}));

export default useFilters;
