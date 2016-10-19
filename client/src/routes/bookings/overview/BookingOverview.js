import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './BookingOverview.css';
import Layout from '../../../components/Layout';
import BookingTable from '../../../components/BookingComponents/BookingTable';

const messages = defineMessages({
  bookingOverviewPageTitle: {
    id: 'bookings.title',
    defaultMessage: 'Bookings',
    description: 'Bookings page title',
  },
});

function BookingOverview({bookings}) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            <FormattedMessage {...messages.bookingOverviewPageTitle}/>
          </h1>
          <BookingTable
            rows={bookings}
          />
        </div>
      </div>
    </Layout>
  );
}

BookingOverview.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    customerId: PropTypes.number.isRequired,
    details: PropTypes.string,
    status: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
};
BookingOverview.contextTypes = {
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(BookingOverview));
