export interface LoginData {
  email: string;
  password: string;
}

export interface UserLogin {
  status: 'loading' | 'idle' | 'failed';
  token: string;
  errorMessage: string;
  name: string;
  email: string;
}
