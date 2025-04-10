import { IUser } from "@/types/api/IUser";
import { create } from "zustand";

export interface IUserStore {
  user: IUser | null
  isLoading: boolean
  error: string | null
  filter: boolean | null
  setFilter: (state: boolean) => void
  clearFilter: () => void
  setUser: (user: IUser) => void
  removeUser: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  filter: null,
  setFilter: (state) => set(() => ({ filter: state })),
  clearFilter: () => set(() => ({ filter: null })),
  setUser: (user) => set(() => ({ user })),
  removeUser: () => set(() => ({ user: null })),
  setLoading: (loading) => set(() => ({ isLoading: loading })),
  setError: (error) => set(() => ({ error })),
}));
