import { call, put, takeEvery, ForkEffect, select } from 'redux-saga/effects';
import { types, actions as postActions } from '../actions/post';
import { getPosts, likePost, dislikePost } from '../services/posts';
import { Action, State } from '../types/common';
import { Post } from '../types/post';

function* onGetPosts(action: Action) {
  try {
    const { city, limit, offset, fromStart } = action.payload!;
    const { data } = yield call(
        getPosts,
        limit as number,
        offset as number,
        city as string,
    );

    const currentPosts: Post[] = yield select((state: State) => state.post.posts);
    const posts = fromStart ? data.posts : [...currentPosts, ...data.posts];
    yield put(postActions.setPosts(posts));
  } catch (e) {
    yield put(postActions.error());
  }
}

function* onLikedPost(action: Action) {
  try {
    const { postId, isDislike } = action.payload!;
    console.log({ postId, isDislike });
    const endpoint = isDislike ? dislikePost : likePost;

    yield call(endpoint, postId as string);
  } catch (e) {
    yield put(postActions.error());
  }
}

export default function* watchUser(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.GET_POSTS, onGetPosts);
  yield takeEvery(types.LIKE_POST, onLikedPost);
}
