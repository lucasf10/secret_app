import { UserState } from './user';

export interface Action {
  type: string;
  payload?: Record<string, unknown>;
}

export interface State {
  user: UserState;
  toast: ToastState;
}

export interface ToastState {
  text: string;
}
