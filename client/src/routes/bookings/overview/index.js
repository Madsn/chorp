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
        query: `{
          bookings {
            edges {
              node {
                id,
                details,
                checkinDate,
                checkoutDate,
                petOwner {
                  username
                }
              }
            }
          }
        }`,
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const {data} = await resp.json();
    console.log('Data:');
    console.log(data);
    console.log(data.bookings.edges);
    console.log(data.bookings.edges[0].node.petOwner)
    if (!data || !data.bookings || !data.bookings.edges) throw new Error('Failed to load the dashboard data.');
    return {
      title,
      component: <BookingOverview bookings={data.bookings.edges} title={title}/>,
    };
  },
};
