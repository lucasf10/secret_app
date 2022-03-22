import { combineReducers } from 'redux';
import user from './user';
import toast from './toast'

const reducers = combineReducers({
  user,
  toast,
});

export default reducers;
