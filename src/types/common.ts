import { CommentState } from './comment';
import { PostState } from './post';
import { UserState } from './user';

export interface Action {
  type: string;
  payload?: Record<string, unknown>;
}

export interface State {
  user: UserState;
  toast: ToastState;
  post: PostState;
  comment: CommentState;
}

export interface ToastState {
  text: string;
}
