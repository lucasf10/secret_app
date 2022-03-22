import { types } from '../actions/toast';
import { Action, ToastState } from '../types/common';

const INITIAL_STATE: ToastState = {
  text: '',
};

const toastState = (state = INITIAL_STATE, action: Action): ToastState => {
  switch (action.type) {
    case types.CLEAR_TOAST:
    case types.SET_TOAST:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default toastState;
