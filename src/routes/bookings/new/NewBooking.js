import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './NewBooking.css';
import NewBookingForm from '../../../components/BookingComponents/NewBookingForm';

const messages = defineMessages({
  newBookingPageTitle: {
    id: 'newbooking.title',
    defaultMessage: 'New booking',
    description: 'New bookings page title',
  },
});

class NewBooking extends React.Component {
  render() {
    this.context.setTitle(this.context.intl.formatMessage(messages.newBookingPageTitle));

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            <FormattedMessage {...messages.newBookingPageTitle}/>
          </h1>
          <NewBookingForm/>
        </div>
      </div>
    );
  }
}

NewBooking.propTypes = {
  // myProp: propTypes.array.isRequired
};

NewBooking.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  intl: PropTypes.object,
};


function mapStateToProps(state) {
  return {
    state: state,
  };
}

export default injectIntl(withStyles(s)(connect(mapStateToProps)(NewBooking)));
