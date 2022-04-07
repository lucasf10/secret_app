export interface UserState {
  isLoggedIn: boolean;
  isFetching: boolean;
  signUp?: boolean;
  accessToken?: string;
  user?: User;
  location?: {
    coordinates: [number, number]
  }
  city?: string;
  firebaseToken?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  likedPosts: string[];
}

export interface UserForm {
  username?: string;
  email?: string;
  password?: string;
  passwordConfirmation?: string;
}
