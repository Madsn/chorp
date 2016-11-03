/*
 *
 * TasksPage
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import selectTasksPage from './selectors';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import {addTask, removeTask} from './actions';
import Button from '../../components/Button';

export class TasksPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.tasksPage}>
        <Helmet
          title="TasksPage"
          meta={[
            {name: 'description', content: 'Description of TasksPage'},
          ]}
        />
        <FormattedMessage {...messages.header} />
        <Button onClick={this.props.onAddTask}>
          Add task
        </Button>
        <ul>
          {this.props.tasks.map(function (item) {
            return <li key={item.key} value={item.key} onClick={this.props.onRemoveTask}>
              {item.title} - {item.description}
            </li>
          }, this)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = selectTasksPage();

var i = 0;
function getNewTask() {
  i++;
  return {key: i, title: 'Hello', description: 'World' + i};
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTask: (evt) => dispatch(addTask(getNewTask())),
    onRemoveTask: (evt) => dispatch(removeTask(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksPage);
