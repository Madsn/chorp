import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './CustomerOverview.css';
import CustomerTable from '../../../components/CustomerComponents/CustomerTable';

const messages = defineMessages({
  customerOverviewPageTitle: {
    id: 'customers.title',
    defaultMessage: 'Customers',
    description: 'Customers overview page title',
  },
});

function CustomerOverview({customers}, context) {
  context.setTitle(context.intl.formatMessage(messages.customerOverviewPageTitle));
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>
          <FormattedMessage {...messages.customerOverviewPageTitle}/>
        </h1>
        <CustomerTable rows={customers}/>
      </div>
    </div>
  );
}

CustomerOverview.propTypes = {
  customers: PropTypes.array.isRequired,
};
CustomerOverview.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(CustomerOverview));
