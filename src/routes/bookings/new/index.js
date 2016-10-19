import React from 'react';
import NewBooking from './NewBooking';

const title = 'Placeholder';

export default {

  path: '/new-booking',

  async action() {
    return {
      title,
      component: <NewBooking title={title} />,
    };
  },
};
