import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import watchUser from './user';
import watchToast from './toast';

export default function* (): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(watchUser)]);
  yield all([fork(watchToast)]);
}
