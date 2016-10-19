import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import bookingReducer from './bookingReducer';

export default combineReducers({
  user,
  runtime,
  intl,
  bookingReducer,
});
