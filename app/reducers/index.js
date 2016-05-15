import { combineReducers } from 'redux';
import navigationState from './navigation';
import userState from './user';

export default combineReducers({
  navigationState,
  userState,
});
