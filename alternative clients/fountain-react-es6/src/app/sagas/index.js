import {take, fork} from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';

// worker Saga
function * printTask(action) {
  console.log('printtask', action);
}

function * fetchTodoList() {
  console.log('fetchtodolist');
}

/*
 Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
 Allows concurrent fetches of user.
 */
function * addTodoWatcher() {
  while (true) {
    const action = yield * take(types.ADD_TODO, printTask);
    console.log(action);
  }
}

function * fetchTodoWatcher() {
  while (true) {
    const action = yield * take(types.FETCH_TODO_LIST);
    console.log(action);
  }
}

export default function * root() {
  yield [
    fork(addTodoWatcher),
    fork(fetchTodoWatcher),
  ]
}
