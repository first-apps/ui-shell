import { create } from "zustand";
import { AuthStateDto, AuthActionDto } from "../models";

const initialState: AuthStateDto = {
  data: null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthStateDto & AuthActionDto>((set) => ({
  ...initialState,
  login: (data) =>
    set({
      data,
      isAuthenticated: true,
    }),
  logout: () => set(initialState),
}));
