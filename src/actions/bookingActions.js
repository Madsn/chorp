import * as types from '../constants/index';
import fetch from '../core/fetch';
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Usage!
export function createBookingSuccess(booking) {
  return {
    type: types.CREATE_BOOKING_SUCCESS, booking,
  };
}

export function createBooking(booking) {
  return async function (dispatch) {
    console.log(`booking:`);
    console.log(booking);
    const body = JSON.stringify({
      query: `mutation{createBooking(category:"${booking.category}",customer:"${booking.customer}",details:"${booking.details}",status:"${booking.status}"){id,status}}`,
    });
    console.log(`body: ${body}`);
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
      credentials: 'include',
    });
    console.log(resp);
    console.log(resp.status);
    if (resp.status !== 200) throw new Error(resp.errors);
    sleep(1000).then(async () => {
      const {data} = await resp.json();
      console.log(data);
      if (!data || !data.createBooking) throw new Error('Failed to load the booking data. ');
      console.log('dispatching success');
      dispatch(createBookingSuccess(data.createBooking));
    });
  };
}
