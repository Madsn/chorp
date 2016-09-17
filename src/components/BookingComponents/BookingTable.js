import React from 'react';
import BookingTableActionCol from './BookingTableActionCol';

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
            <tr key={item.id}>
              <td>
                <a href={`bookings/${item.id}`}>
                  View booking
                </a>
              </td>
              <td><span className="badge alert-success">{ item.category }</span></td>
              <td>{ item.customer }</td>
              <td>{ item.details }</td>
              <td><span className="text-info">{ item.status }</span></td>
              <td>
                <BookingTableActionCol item={item}/>
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
  rows: React.PropTypes.array.isRequired,
};

export default BookingTable;
