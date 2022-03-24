import { combineReducers } from 'redux';
import user from './user';
import toast from './toast';
import post from  './post';

const reducers = combineReducers({
  user,
  toast,
  post,
});

export default reducers;
