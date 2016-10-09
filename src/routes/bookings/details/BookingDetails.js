import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './BookingDetails.css';
import Layout from '../../../components/Layout';
import BookingDetailsComponent from '../../../components/BookingComponents/BookingDetailsComponent';
import CustomerDetailsComponent from '../../../components/CustomerComponents/CustomerDetailsComponent';

const messages = defineMessages({
  bookingDetailsPageTitle: {
    id: 'bookings.details.title',
    defaultMessage: 'Booking info',
    description: 'Booking details page title',
  },
});

function BookingDetails({booking, title}) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            {title}
          </h1>
          <div className="col-sm-6">
            <BookingDetailsComponent booking={booking}/>
          </div>
          <div className="col-sm-6">
            <CustomerDetailsComponent customer={booking.customer}/>
          </div>
        </div>
      </div>
    </Layout>
  );
}

BookingDetails.propTypes = {
  booking: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
BookingDetails.contextTypes = {
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(BookingDetails));
