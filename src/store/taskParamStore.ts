import { create } from "zustand";

export interface ITaskParamrStore {
  filter: boolean | null;
  search: string;
  setFilter: (state: boolean | null) => void;
  setSearch: (search: string) => void;
}

export const useTaskParamStore = create<ITaskParamrStore>((set) => ({
  filter: null,
  search: "",
  setFilter: (state) => set(() => ({ filter: state })),
  setSearch: (search) => set(() => ({ search }))  // Corrected this line
}));
