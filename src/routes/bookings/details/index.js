import React from 'react';
import BookingDetails from './BookingDetails';
import fetch from '../../../core/fetch';

export default {

  path: '/bookings/:bookingId',

  async action(_, {bookingId}) {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `{booking(id:${bookingId}){id,category,customer,details,status}}`,
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const {data} = await resp.json();
    if (!data || !data.booking) throw new Error('Failed to load the booking data.');
    return <BookingDetails booking={data.booking}/>;
  },
};
