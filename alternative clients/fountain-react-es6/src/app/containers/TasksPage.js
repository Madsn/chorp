import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Layout from '../components/Layout';
import * as TodoActions from '../actions/index';

class TasksPage extends Component {

  componentWillMount() {
    this.props.actions.loadTasks();
  }

  render() {
    return (
      <Layout>
        <p>Taskspage</p>
      </Layout>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.array,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);

