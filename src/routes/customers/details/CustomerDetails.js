import React, {PropTypes} from 'react';
import objectAssign from 'object-assign';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import {Panel} from 'react-bootstrap';
import s from './CustomerDetails.css';
import EditCustomerDetails from '../../../components/CustomerComponents/EditCustomerDetails';

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
          <Panel>
            <h1 className={s.title}>
              <FormattedMessage {...messages.customerDetailsPageTitle}/>
            </h1>
            <EditCustomerDetails customer={this.state.customer}/>
          </Panel>
        </div>
      </div>
    );
  }
}

CustomerDetails.propTypes = {
  customer: PropTypes.object.isRequired,
};

export default injectIntl(withStyles(s)(CustomerDetails));
