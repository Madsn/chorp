/*
 *
 * TasksPage actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_TASK_ACTION
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