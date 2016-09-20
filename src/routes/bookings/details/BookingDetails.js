import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './BookingDetails.css';

const messages = defineMessages({
  bookingDetailsPageTitle: {
    id: 'bookings.details.title',
    defaultMessage: 'Booking info',
    description: 'Booking details page title',
  },
});

function BookingDetails({booking}, context) {
  context.setTitle(context.intl.formatMessage(messages.bookingDetailsPageTitle));
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>
          <FormattedMessage {...messages.bookingDetailsPageTitle}/>
        </h1>
        {booking.id}
      </div>
    </div>
  );
}

BookingDetails.propTypes = {
  booking: PropTypes.object.isRequired,
};
BookingDetails.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(BookingDetails));
