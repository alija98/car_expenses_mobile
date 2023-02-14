export type CreateUserPost = {
  email: string;
  password: string;
  passwordConfirmation: string;
  name: string;
};

export type LogInUserPost = {
  email: string;
  password: string;
};
