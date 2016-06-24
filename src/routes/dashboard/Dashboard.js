import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Dashboard.css';

const title = 'Dashboard';

function Dashboard({ bookings }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Dashboard</h1>
          <ul>
            {bookings.map((item, index) => (
              <li>{item.id} -
              {item.category} -
              {item.customer} -
              {item.details} -
              {item.status}</li>
            ))}
          </ul>
        <p>Dashboard</p>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    details: PropTypes.string,
    status: PropTypes.string,
  })).isRequired,
};
Dashboard.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Dashboard);
