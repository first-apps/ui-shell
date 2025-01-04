export interface AuthInitialDataDto {
  isAuthenticated: boolean;
  data: null | AuthData;
}

export interface AutInitialStateDto extends AuthInitialDataDto {
  login: (data: AuthInitialDataDto["data"]) => void;
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
