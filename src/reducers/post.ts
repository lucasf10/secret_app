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
      return {
        ...state,
        isFetching: true,
      };
    case types.SET_POSTS:
      console.log({
        ...state,
        ...action.payload,
        isFetching: false,
      });
      return {
        ...state,
        ...action.payload,
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

export default postState;
