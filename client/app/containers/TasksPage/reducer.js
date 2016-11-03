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

function tasksPageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_ACTION:
      return state
        .setIn(['tasks'], state.get('tasks').push(action.task));
    case REMOVE_TASK_ACTION:
      return state
        .setIn(['tasks'], state.get('tasks').filter(function(obj){ return obj.key != action.key}));
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default tasksPageReducer;
