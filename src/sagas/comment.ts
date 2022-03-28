import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';
import { actions as postActions } from '../actions/post';
import { types, actions as commentActions } from '../actions/comment';
import { createComment, deleteComment } from '../services/comment';
import { Action } from '../types/common';

function* onCreateComment(action: Action) {
  try {
    const { postId, text } = action.payload!;
    if (postId) {
      yield call(createComment, postId as string, text as string);
      yield put(postActions.getPost(postId as string));
      yield put(commentActions.finishedOperation());
    }
  } catch (e) {
    console.log(e);
    yield put(commentActions.error());
  }
}

function* onDeleteComment(action: Action) {
  try {
    const { commentId, postId } = action.payload!;
    if (commentId) {
      yield call(deleteComment, commentId as string);
      yield put(postActions.getPost(postId as string));
      yield put(commentActions.finishedOperation());
    }
  } catch (e) {
    yield put(commentActions.error());
  }
}

export default function* watchComment(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.CREATE_COMMENT, onCreateComment);
  yield takeEvery(types.DELETE_COMMENT, onDeleteComment);
}
