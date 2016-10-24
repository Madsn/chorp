import React, {PropTypes} from 'react';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import BookingTableActionCol from './BookingTableActionCol';

const messages = defineMessages({
  bookingTableViewBooking: {
    id: 'bookings.table.viewBooking',
    defaultMessage: 'View Booking',
    description: 'Bookings table view booking label',
  },
});

const BookingTable = (props) => (
  <div>
    <div className="row">
      <div className="card col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th/>
              <th>Booking type</th>
              <th>Customer</th>
              <th>Details</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {props.rows.map(item => (
            <tr key={item.node.id}>
              <td>
                <a href={`bookings/${item.node.id}`}>
                  <FormattedMessage {...messages.bookingTableViewBooking}/>
                </a>
              </td>
              <td>{ item.node.details }</td>
              <td>{ item.node.petOwner.username }</td>
              <td>{ item.node.checkinDate }</td>
              <td><span className="text-info">{ item.node.checkoutDate }</span></td>
              <td>
                <BookingTableActionCol item={item.node}/>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

BookingTable.propTypes = {
  rows: PropTypes.array.isRequired,
};

export default injectIntl(BookingTable);
