import objectAssign from 'object-assign';
import * as types from '../constants/index';
import initialState from './initialState';

export default function bookingReducer(state = initialState.booking, action) {
  let newState;
  switch (action.type) {
    case types.CREATE_BOOKING_SUCCESS:
      newState = objectAssign({}, state);
      newState.bookings.push(action.booking);
      return newState;
    default:
      return state;
  }
}
