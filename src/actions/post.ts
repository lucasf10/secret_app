import { Action } from '../types/common';
import { Post } from '../types/post';

const name = 'POST/';

export const types = {
  GET_POSTS: `${name}/GET_POSTS`,
  SET_POSTS: `${name}/SET_POSTS`,
  LIKE_POST: `${name}/LIKE_POST`,
  ERROR: `${name}/ERROR`,
};

export const actions = {
  getPosts: (city: string, limit: number, offset: number, fromStart: boolean): Action => ({
    type: types.GET_POSTS,
    payload: { city, limit, offset, fromStart },
  }),
  setPosts: (posts: Post[]): Action => ({
    type: types.SET_POSTS,
    payload: { posts },
  }),
  likePost: (postId: string, isDislike: boolean): Action => ({
    type: types.LIKE_POST,
    payload: { postId, isDislike },
  }),
  error: (): Action => ({
    type: types.ERROR,
  }),
};
