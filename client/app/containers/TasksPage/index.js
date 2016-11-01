/*
 *
 * TasksPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectTasksPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';

export class TasksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.tasksPage}>
        <Helmet
          title="TasksPage"
          meta={[
            { name: 'description', content: 'Description of TasksPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <ul>
          {this.props.tasks.map(function(item) {
            return <li>{item.title} - {item.description}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = selectTasksPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
