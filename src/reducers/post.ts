import { PostState } from '../types/post';
import { Action } from '../types/common';
import { types } from '../actions/post';

const INITIAL_STATE: PostState = {
  isFetching: false,
  posts: [],
};

const postState = (state = INITIAL_STATE, action: Action): PostState => {
  switch (action.type) {
    case types.GET_POSTS:
    case types.OPEN_POST_PAGE:
    case types.CREATE_POST:
      return {
        ...state,
        isFetching: true,
      };
    case types.SET_POSTS:
    case types.SET_CURRENT_POST:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    case types.LIKE_POST:
      return {
        ...state,
        ...action.payload,
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

export default postState;
