/*
 *
 * TasksPage reducer
 *
 */

import {fromJS} from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TASK_ACTION
} from './constants';

const initialState = fromJS({
  tasks: [
    {title: 'Hello', description: 'World'}
  ]
});

function addTask(state, newTask) {
  return fromJS({
    tasks: state.get('tasks').push(newTask)
  })
}

function tasksPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_ACTION:
      return addTask(state, action.task);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default tasksPageReducer;
