export interface LoginData {
  email: string;
  password: string;
  // key: string;
  //   cb?: (role: RoleType) => void;
}

export interface RUserLogin {
  status: 'loading' | 'idle' | 'failed';
  isLogged: boolean;
  token: string;
  errorMessage: string;
  // first_name: string;
  // last_name: string;
  username: string;
  //   role: RoleType | null;
}
