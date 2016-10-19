import React, {PropTypes} from 'react';

const CustomerDetailsComponent = (props) => (
  <p>{props.customer}</p>
);

CustomerDetailsComponent.propTypes = {
  customer: PropTypes.string.isRequired,
};

export default CustomerDetailsComponent;
