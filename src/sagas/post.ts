import { call, put, takeEvery, ForkEffect, select } from 'redux-saga/effects';
import { types, actions as postActions } from '../actions/post';
import { actions as userActions } from '../actions/user';
import { getPosts, likePost, dislikePost } from '../services/posts';
import { Action, State } from '../types/common';
import { Post } from '../types/post';
import { UserState } from '../types/user';

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
    const endpoint = isDislike ? dislikePost : likePost;

    yield call(endpoint, postId as string);
    const currentPosts: Post[] = yield select((state: State) => state.post.posts);

    const userState: UserState = yield select((state: State) => state.user);
    const user = userState.user!;
    if (isDislike)
      user.likedPosts = user.likedPosts.filter((id: string) => id !== postId);
    else
      user.likedPosts.push(postId as string);

    yield put(userActions.setUserData(user));
    yield put(postActions.getPosts('', currentPosts.length, 0, true));
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
