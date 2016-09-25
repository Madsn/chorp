import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import * as bookingActions from '../../../actions/bookingActions';
import {navigate} from '../../../actions/route';
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
  constructor(props, context) {
    super(props, context);

    this.state = {
      booking: {},
    };
    this.saveCourse = this.saveCourse.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.target.id;
    const booking = this.state.booking;
    booking[field] = event.target.value;
    return this.setState({booking});
  }

  saveCourse(event) {
    event.preventDefault();
    this.props.actions.createBooking(this.state.booking);
    this.props.navigate({pathname: '/bookings'});
  }

  render() {
    this.context.setTitle(this.context.intl.formatMessage(messages.newBookingPageTitle));

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            <FormattedMessage {...messages.newBookingPageTitle}/>
          </h1>
          <NewBookingForm onSave={this.saveCourse} onChange={this.onChange}/>
        </div>
      </div>
    );
  }
}

NewBooking.propTypes = {
  actions: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

NewBooking.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  intl: PropTypes.object,
};


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookingActions, dispatch),
    navigate,
  };
}


export default injectIntl(withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(NewBooking)));
