import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';
import { types, actions as postActions } from '../actions/post';
import { getPosts } from '../services/posts';
import { Action } from '../types/common';

function* onGetPosts(action: Action) {
  try {
    const { city } = action.payload!;
    const { data } = yield call(getPosts);

    // console.log(data);

    yield put(postActions.setPosts(data.posts));
  } catch (e) {
      console.log(e);
    yield put(postActions.error());
  }
}

export default function* watchUser(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.GET_POSTS, onGetPosts);
}
