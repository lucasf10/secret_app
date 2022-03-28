import { Action } from '../types/common';
import { types } from '../actions/comment';
import { CommentState } from '../types/comment';

const INITIAL_STATE: CommentState = {
  isFetching: false,
};

const commentState = (state = INITIAL_STATE, action: Action): CommentState => {
  switch (action.type) {
    case types.CREATE_COMMENT:
    case types.DELETE_COMMENT:
    case types.LIKE_COMMENT:
      return {
        ...state,
        isFetching: true,
      };
    case types.FINISHED_OPERATION:
      return {
          isFetching: false,
      };
    case types.ERROR:
      return {
          ...state,
          isFetching: false,
      };
    default:
      return state;
  }
};

export default commentState;
