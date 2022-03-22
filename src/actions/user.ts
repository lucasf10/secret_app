import { Action } from '../types/common';
import { UserForm } from '../types/user';

const name = 'USER/';

export const types = {
  PERFORM_AUTH: `${name}/PERFORM_AUTH`,
  SET_LOGGED: `${name}/SET_LOGGED`,
  SIGN_OUT: `${name}/SIGN_OUT`,
  SIGN_UP: `${name}/SIGN_UP`,
  ERROR: `${name}/ERROR`,
};

export const actions = {
  performAuth: (email: string, password: string): Action => ({
    type: types.PERFORM_AUTH,
    payload: { email, password },
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
