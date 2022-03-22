import { call, put, takeEvery, ForkEffect } from 'redux-saga/effects';
import { types, actions as userActions } from '../actions/user';
import { performAuth } from '../services/users';
import api from '../services/api';
import { Action } from '../types/common';

function* onPerformAuth(action: Action) {
  try {
    const { email, password } = action.payload!;
    const { data } = yield call(
      performAuth,
      email as string,
      password as string,
    );

    console.log(data);

    yield put(userActions.setLogged(true, data.token));
  } catch (e) {
    console.error(JSON.stringify(e));
    // yield put(userActions.error());
  }
}

function* onSignOut() {
  try {
    yield put(userActions.setLogged(false));
  } catch (e) {
    console.log(JSON.stringify(e));
    // yield put(userActions.error());
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
  yield takeEvery(types.SIGN_OUT, onSignOut);
  yield takeEvery(types.SET_LOGGED, onUserLogged);
}
