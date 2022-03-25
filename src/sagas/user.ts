import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';
import { types, actions as userActions } from '../actions/user';
import { actions as postActions } from '../actions/post';
import { performAuth, performSignUp } from '../services/users';
import api from '../services/api';
import { Action } from '../types/common';
import { User, UserForm } from '../types/user';

function* onPerformAuth(action: Action) {
  try {
    const { email, password } = action.payload!;
    const { data } = yield call(
      performAuth,
      email as string,
      password as string,
    );
    yield put(userActions.setUserData(data.user as User));
    yield put(userActions.setAccessToken(data.token));
    yield put(userActions.setLogged(true, data.token));
  } catch (e) {
    yield put(userActions.error());
  }
}

function* onSignUp(action: Action) {
  try {
    const { payload } = action.payload!;
    const { data } = yield call(performSignUp, payload as UserForm);

    yield put(userActions.setLogged(true, data.token));
  } catch (e) {
    yield put(userActions.error());
  }
}

function* onSignOut() {
  try {
    yield put(userActions.setLogged(false, undefined));
    yield put(postActions.setPosts([]));
  } catch (e) {
    yield put(userActions.error());
  }
}

function* onUserLogged(action: Action) {
  const { accessToken } = action.payload!;
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

export default function* watchUser(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.PERFORM_AUTH, onPerformAuth);
  yield takeEvery(types.SIGN_UP, onSignUp);
  yield takeEvery(types.SIGN_OUT, onSignOut);
  yield takeEvery(types.SET_LOGGED, onUserLogged);
}
