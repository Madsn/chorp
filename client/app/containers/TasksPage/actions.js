/*
 *
 * TasksPage actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_TASK_ACTION,
  REMOVE_TASK_ACTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addTask(task) {
  return {
    type: ADD_TASK_ACTION,
    task
  };
}

export function removeTask(key) {
  return {
    type: REMOVE_TASK_ACTION,
    key
  };
}
