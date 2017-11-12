import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  test: TestReducer,
  auth: AuthReducer,
});
