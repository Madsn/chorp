import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './CustomerDetails.css';

const messages = defineMessages({
  customerDetailsPageTitle: {
    id: 'customers.details.title',
    defaultMessage: 'Customers\' Details',
    description: 'Customers\' Details page title',
  },
});

class CustomerDetails extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      customer: objectAssign({}, this.props.customer),
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            <FormattedMessage {...messages.customerDetailsPageTitle}/>
          </h1>

        </div>
      </div>
    );
  }
}

CustomerDetails.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(s)(CustomerDetails));
