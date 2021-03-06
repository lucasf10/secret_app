import { UserState } from '../types/user';
import { Action } from '../types/common';
import { types } from '../actions/user';

const INITIAL_STATE: UserState = {
  isLoggedIn: false,
  isFetching: false,
};

const userState = (state = INITIAL_STATE, action: Action): UserState => {
  switch (action.type) {
    case types.PERFORM_AUTH:
    case types.SIGN_OUT:
    case types.SIGN_UP:
    case types.GET_LOCATION:
    case types.GET_FIREBASE_TOKEN:
      return {
        ...state,
        isFetching: true,
      };
    case types.SET_LOGGED:
    case types.SET_USER_DATA:
    case types.SET_ACCESS_TOKEN:
    case types.SET_LOCATION:
    case types.SET_CITY:
    case types.SET_FIREBASE_TOKEN:
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    case types.ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userState;
