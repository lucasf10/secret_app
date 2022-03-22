import { Action } from '../types/common';

const name = 'TOAST/';

export const types = {
  SET_TOAST: `${name}/TOAST`,
  CLEAR_TOAST: `${name}/CLEAR_TOAST`,
};

export const actions = {
  setToast: (text: string): Action => ({
    type: types.SET_TOAST,
    payload: { text },
  }),
  clearToast: (): Action => ({
    type: types.CLEAR_TOAST,
    payload: { text: '' },
  }),
};
