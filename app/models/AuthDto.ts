export interface AuthStateDto {
  isAuthenticated: boolean;
  data: null | AuthData;
}

export interface AuthActionDto {
  login: (data: AuthStateDto["data"]) => void;
  logout: () => void;
}

interface AuthData {
  name: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  role: Role;
}

export enum Role {
  USER = "user",
  CREATOR = "creator",
}
