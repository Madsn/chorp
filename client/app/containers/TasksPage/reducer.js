/*
 *
 * TasksPage reducer
 *
 */

import {fromJS} from 'immutable';
import {findIndex} from 'lodash';
import {
  DEFAULT_ACTION,
  ADD_TASK_ACTION,
  REMOVE_TASK_ACTION
} from './constants';

const initialState = fromJS({
  tasks: []
});

function addTask(state, newTask) {
  return fromJS({
    tasks: state.get('tasks').push(newTask)
  })
}

function removeTask(state, key) {
  console.log('removing', key);
  var index = findIndex(state.get('tasks'), ['key', key]);
  console.log('index', index);
  if (index >= 0) {
    return fromJS({
      tasks: state.get('tasks').splice(index, 1)
    })
  } else {
    return state;
  }
}

function tasksPageReducer(state = initialState, action) {
  console.log('tasksPageReducer got action of type ', action.type);
  switch (action.type) {
    case ADD_TASK_ACTION:
      return addTask(state, action.task);
    case REMOVE_TASK_ACTION:
      console.log(action);
      console.log(action.key);
      return removeTask(state, action.key);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default tasksPageReducer;
