import * as types from '../constants/index';
import fetch from '../core/fetch';

export function createBookingSuccess(booking) {
  return {
    type: types.CREATE_BOOKING_SUCCESS, booking,
  };
}

export function createBooking(booking) {
  return async function (dispatch) {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation{createBooking(category:"${booking.category}",customer:"${booking.customer}",details:"${booking.details}",status:"${booking.status}"){id}}`,
      }),
      credentials: 'include',
    });
    console.log(resp);
    console.log(resp.status);
    if (resp.status !== 200) throw new Error(resp.errors);
    const {data} = await resp.json();
    console.log(data);
    if (!data || !data.booking) throw new Error('Failed to load the dashboard data. ');
    console.log('dispatching success');
    dispatch(createBookingSuccess(data.booking));
  };
}
