import React from 'react';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';

const messages = defineMessages({
  customerTableViewCustomer: {
    id: 'customer.overview.viewCustomer',
    defaultMessage: 'View Customer',
    description: 'Customer table link to view customer details',
  },
});

const CustomerTable = (props) => (
  <div>
    <div className="row">
      <div className="card col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th/>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
          {props.rows.map(item => (
            <tr key={item.id}>
              <td>
                <a href={`bookings/${item.id}`}>
                  <FormattedMessage {...messages.customerTableViewCustomer}/>
                </a>
              </td>
              <td>{item.id}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

CustomerTable.propTypes = {
  rows: React.PropTypes.array.isRequired,
};

export default injectIntl(CustomerTable);
