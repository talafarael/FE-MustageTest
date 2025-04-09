import { create } from "zustand";

export interface ITokenStore {
  token: string | null
  setToken: (toke: string) => void
  removeToken: () => void

}

export const useTokenStore = create<ITokenStore>((set) => ({
  token: null,
  setToken: (token) => set(() => ({ token: token })),
  removeToken: () => set(() => ({ token: null })),

}));
