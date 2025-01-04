import { create } from "zustand";
import { AuthInitialDataDto, AutInitialStateDto } from "../models";

const initialState: AuthInitialDataDto = {
  data: null,
  isAuthenticated: false,
};

export const useAuthStore = () =>
  create<AutInitialStateDto>((set) => ({
    ...initialState,
    login: (data) =>
      set({
        data,
        isAuthenticated: true,
      }),
    logout: () => set(initialState),
  }));
