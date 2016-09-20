import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './BookingOverview.css';
import BookingTable from '../../../components/BookingComponents/BookingTable';

const messages = defineMessages({
  bookingOverviewPageTitle: {
    id: 'bookings.title',
    defaultMessage: 'Bookings',
    description: 'Bookings page title',
  },
});

function BookingOverview({bookings}, context) {
  context.setTitle(context.intl.formatMessage(messages.bookingOverviewPageTitle));
  return (
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
  );
}

BookingOverview.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    details: PropTypes.string,
    status: PropTypes.string,
  })).isRequired,
};
BookingOverview.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(BookingOverview));
