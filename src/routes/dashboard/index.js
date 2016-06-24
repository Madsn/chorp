import React from 'react';
import Dashboard from './Dashboard';
import fetch from '../../core/fetch';

export default {

  path: '/dashboard',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{booking{id,category,customer,details,status}}',
      }),
      credentials: 'include',
    });
    const { data } = await resp.json();
    if (!data || !data.booking) throw new Error('Failed to load the dashboard data.');
    return <Dashboard bookings={data.booking} />;
  },

};
