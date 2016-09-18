import React from 'react';
import NewBooking from './NewBooking';

export default {

  path: '/new-booking',

  async action() {
    return <NewBooking/>;
  },
};
