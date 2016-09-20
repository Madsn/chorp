import { combineReducers } from 'redux';
import runtime from './runtime';
import intl from './intl';
import bookingReducer from './bookingReducer';

export default combineReducers({
  runtime,
  intl,
  bookingReducer,
});
