import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return {type: types.ADD_TODO, text};
}

export function deleteTodo(id) {
  return {type: types.DELETE_TODO, id};
}

export function editTodo(id, text) {
  return {type: types.EDIT_TODO, id, text};
}

export function completeTodo(id) {
  return {type: types.COMPLETE_TODO, id};
}

export function completeAll() {
  return {type: types.COMPLETE_ALL};
}

export function clearCompleted() {
  return {type: types.CLEAR_COMPLETED};
}

export function loadingTasksTriggered() {
  return {type: types.TASKS_LOADING};
}

export function loadingTasksSuccess(json) {
  return {type: types.TASKS_LOAD_SUCCESS, tasks: json};
}

export function loadTasks() {
  return function (dispatch) {
    dispatch(loadingTasksTriggered());
    return fetch(`http://localhost:8000/api/tasks`)
      .then(response => response.json())
      .then(json =>
        dispatch(loadingTasksSuccess(json))
      );
  };
}
