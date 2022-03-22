export interface UserState {
  isLoggedIn: boolean;
  isFetching: boolean;
  signUp?: boolean;
  accessToken?: string;
  user?: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface UserForm {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
