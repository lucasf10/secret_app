import { CreatePostProp } from '../scenes/createPosts';
import { FeedProp } from '../scenes/feed';
import { Action } from '../types/common';
import { Post } from '../types/post';

const name = 'POST/';

export const types = {
  GET_POSTS: `${name}/GET_POSTS`,
  GET_POST: `${name}/GET_POST`,
  SET_CURRENT_POST: `${name}/SET_CURRENT_POST`,
  SET_POSTS: `${name}/SET_POSTS`,
  LIKE_POST: `${name}/LIKE_POST`,
  CREATE_POST: `${name}/CREATE_POST`,
  OPEN_POST_PAGE: `${name}/OPEN_POST_PAGE`,
  ERROR: `${name}/ERROR`,
};

export const actions = {
  getPosts: (limit: number, offset: number, fromStart: boolean): Action => ({
    type: types.GET_POSTS,
    payload: { limit, offset, fromStart },
  }),
  setPosts: (posts: Post[]): Action => ({
    type: types.SET_POSTS,
    payload: { posts },
  }),
  setCurrentPost: (currentPost: Post): Action => ({
    type: types.SET_CURRENT_POST,
    payload: { currentPost },
  }),
  getPost: (postId: string): Action => ({
    type: types.GET_POST,
    payload: { postId },
  }),
  likePost: (postId: string, isDislike: boolean): Action => ({
    type: types.LIKE_POST,
    payload: { postId, isDislike },
  }),
  createPost: (
    navigation: CreatePostProp,
    text: string,
    colorCode: string,
  ): Action => ({
    type: types.CREATE_POST,
    payload: { navigation, text, colorCode },
  }),
  openPostPage: (postId: string, navigation: FeedProp): Action => ({
    type: types.OPEN_POST_PAGE,
    payload: { postId, navigation },
  }),
  error: (): Action => ({
    type: types.ERROR,
  }),
};
