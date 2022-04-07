import { Action } from '../types/common';
import { User, UserForm } from '../types/user';

const name = 'USER/';

export const types = {
  GET_FIREBASE_TOKEN: `${name}/GET_FIREBASE_TOKEN`,
  SET_FIREBASE_TOKEN: `${name}/SET_FIREBASE_TOKEN`,
  SET_ACCESS_TOKEN: `${name}/SET_ACCESS_TOKEN`,
  SET_USER_DATA: `${name}/SET_USER_DATA`,
  PERFORM_AUTH: `${name}/PERFORM_AUTH`,
  GET_LOCATION: `${name}/GET_LOCATION`,
  SET_LOCATION: `${name}/SET_LOCATION`,
  SET_LOGGED: `${name}/SET_LOGGED`,
  SET_CITY: `${name}/SET_CITY`,
  SIGN_OUT: `${name}/SIGN_OUT`,
  SIGN_UP: `${name}/SIGN_UP`,
  ERROR: `${name}/ERROR`,
};

export const actions = {
  setAccessToken: (accessToken: string): Action => ({
    type: types.SET_ACCESS_TOKEN,
    payload: { accessToken },
  }),
  setUserData: (user: User): Action => ({
    type: types.SET_ACCESS_TOKEN,
    payload: { user },
  }),
  performAuth: (email: string, password: string): Action => ({
    type: types.PERFORM_AUTH,
    payload: { email, password },
  }),
  getLocation: (): Action => ({
    type: types.GET_LOCATION,
  }),
  setLocation: (location: { coordinates: [number, number] }): Action => ({
    type: types.SET_LOCATION,
    payload: { location },
  }),
  getFirebaseToken: (userId: string, token?: string): Action => ({
    type: types.GET_FIREBASE_TOKEN,
    payload: { userId, token },
  }),
  setFirebaseToken: (firebaseToken: string): Action => ({
    type: types.SET_FIREBASE_TOKEN,
    payload: { firebaseToken },
  }),
  setCity: (city: string ): Action => ({
    type: types.SET_LOCATION,
    payload: { city },
  }),
  signUp: (payload: UserForm): Action => ({
    type: types.SIGN_UP,
    payload: { payload },
  }),
  setLogged: (isLoggedIn: boolean, accessToken?: string): Action => ({
    type: types.SET_LOGGED,
    payload: { isLoggedIn, accessToken },
  }),
  signOut: (): Action => ({
    type: types.SIGN_OUT,
  }),
  error: (): Action => ({
    type: types.ERROR,
  }),
};
