import React from 'react';
import BookingOverview from './BookingOverview';
import fetch from '../../../core/fetch';

const title = 'Placeholder';

export default {

  path: '/bookings',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{bookings{id,category,customerId,details,status}}',
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const { data } = await resp.json();
    if (!data || !data.bookings) throw new Error('Failed to load the dashboard data.');
    return {
      title,
      component: <BookingOverview bookings={data.bookings} title={title} />,
    };
  },
};
