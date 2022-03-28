import { Action } from '../types/common';

const name = 'COMMENT/';

export const types = {
  CREATE_COMMENT: `${name}/CREATE_COMMENT`,
  DELETE_COMMENT: `${name}/DELETE_COMMENT`,
  FINISHED_OPERATION: `${name}/FINISHED_OPERATION`,
  ERROR: `${name}/ERROR`,
};

export const actions = {
  createComment: (postId: string, text: string): Action => ({
    type: types.CREATE_COMMENT,
    payload: { postId, text },
  }),
  deleteComment: (commentId: string, postId: string): Action => ({
    type: types.DELETE_COMMENT,
    payload: { commentId, postId },
  }),
  finishedOperation: (): Action => ({
    type: types.FINISHED_OPERATION,
  }),
  error: (): Action => ({
    type: types.ERROR,
  }),
};
