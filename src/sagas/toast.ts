import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { types, actions as toastActions } from '../actions/toast';

function* onToast() {
  yield put(toastActions.clearToast());
}

export default function* watchToast(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeEvery(types.SET_TOAST, onToast);
}
