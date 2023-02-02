export type CreateUserPost = {
  username: string;
  password: string;
  passwordConfirmation: string;
};

export type LogInUserPost = {
  username: string;
  password: string;
};
