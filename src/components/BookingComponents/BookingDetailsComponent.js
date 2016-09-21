import React, {PropTypes} from 'react';

const BookingDetailsComponent = (props) => (
  <p>{props.booking.id}</p>
);

BookingDetailsComponent.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default BookingDetailsComponent;
