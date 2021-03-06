import { call, put, takeEvery, ForkEffect, select } from 'redux-saga/effects';
import { types, actions as userActions } from '../actions/user';
import { actions as postActions } from '../actions/post';
import { performAuth, performSignUp, setUserFirebaseToken } from '../services/users';
import api from '../services/api';
import { Action, LocationResponse, State } from '../types/common';
import { User, UserForm } from '../types/user';
import { Platform } from 'react-native';
import { getCity, getFirebaseToken, getLocation, requestLocationPermission } from '../utils/functions';
import { POST_LIMIT_PER_REQUEST } from '../utils/constants';

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
    yield put(userActions.getFirebaseToken(data.user._id));

  } catch (e) {
    yield put(userActions.error());
  }
}

function* onGetFirebaseToken(action: Action) {
  try {
    const { userId, token } = action.payload!;
    const firebaseToken: string = token || (yield call(getFirebaseToken));
    const currentFirebaseToken: string = yield select((state: State) => state.user.firebaseToken);
    if (firebaseToken !== currentFirebaseToken) {
      yield put(userActions.setFirebaseToken(firebaseToken));
      yield call(setUserFirebaseToken, userId as string, firebaseToken);
    }
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
    yield put(userActions.setFirebaseToken(''));
  } catch (e) {
    yield put(userActions.error());
  }
}

function* onUserLogged(action: Action) {
  const { accessToken } = action.payload!;
  api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

function* onGetLocation(action: Action) {
  try {
    const response: LocationResponse|undefined = yield call(Platform.OS === 'ios' ? getLocation : requestLocationPermission);
    if (response && response.coords) {
      const location: { coordinates: [number, number]} = {
        coordinates: [response.coords.latitude, response.coords.longitude],
      };
      yield put(userActions.setLocation(location));

      const city: string = yield call(
        getCity,
        location.coordinates[0],
        location.coordinates[1],
      );
      yield put(userActions.setCity(city));

      const isLoggedIn: boolean = yield select((state: State) => state.user.isLoggedIn);
      if (isLoggedIn) yield put(postActions.getPosts(POST_LIMIT_PER_REQUEST, 0, true));
    }
    else
      yield put(userActions.error());
  } catch (e) {
    yield put(userActions.error());
  }
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
  yield takeEvery(types.GET_LOCATION, onGetLocation);
  yield takeEvery(types.GET_FIREBASE_TOKEN, onGetFirebaseToken);
}
