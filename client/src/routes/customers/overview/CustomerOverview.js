// @flow
import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';
import s from './CustomerOverview.css';
import CustomerTable from '../../../components/CustomerComponents/CustomerTable';
import Layout from '../../../components/Layout';

const messages = defineMessages({
  customerOverviewPageTitle: {
    id: 'customers.title',
    defaultMessage: 'Customers',
    description: 'Customers overview page title',
  },
});

function CustomerOverview({customers, title}) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1 className={s.title}>
            {title}
          </h1>
          <CustomerTable rows={customers}/>
        </div>
      </div>
    </Layout>
  );
}

CustomerOverview.propTypes = {
  customers: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
CustomerOverview.contextTypes = {
  intl: PropTypes.object,
};

export default injectIntl(withStyles(s)(CustomerOverview));
