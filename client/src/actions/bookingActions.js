import * as types from '../constants/index';
import fetch from '../core/fetch';

export function createBookingSuccess(booking) {
  return {
    type: types.CREATE_BOOKING_SUCCESS, booking,
  };
}

export function redirectToBookingDetails(bookingId) {
  return (dispatch, _, {history}) => {
    history.push(`/bookings/${bookingId}`);
  };
}

export function createBooking(booking) {
  return async (dispatch) => {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation{createBooking(category:"${booking.category}",customer:"${booking.customer}",details:"${booking.details}",status:"${booking.status}"){id,category,customer,details,status}}`,
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.errors);
    const {data} = await resp.json();
    if (!data || !data.createBooking) throw new Error('Failed to load the booking data. ');
    dispatch(createBookingSuccess(data.createBooking));
    dispatch(redirectToBookingDetails(data.createBooking.id));
  };
}
