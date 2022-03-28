import { combineReducers } from 'redux';
import user from './user';
import toast from './toast';
import post from  './post';
import comment from './comment';

const reducers = combineReducers({
  user,
  toast,
  post,
  comment,
});

export default reducers;
