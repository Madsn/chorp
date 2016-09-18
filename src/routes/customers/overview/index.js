import React from 'react';
import CustomerOverview from './CustomerOverview';
import fetch from '../../../core/fetch';

export default {

  path: '/customers',

  async action() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{customer{id}}',
      }),
      credentials: 'include',
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const {data} = await resp.json();
    if (!data || !data.customer) throw new Error('Failed to load the customer data.');
    return <CustomerOverview customers={data.customer}/>;
  },
};
