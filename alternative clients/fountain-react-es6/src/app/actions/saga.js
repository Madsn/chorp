import {takeEvery} from 'redux-saga';
import * as types from '../constants/ActionTypes';

// worker Saga
function * printTask(action) {
  console.log('printtask', action);
}

function * fetchTodoList(action) {
  console.log('fetchtodolist');
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
  */
function * mySaga() {
  yield * takeEvery(types.ADD_TODO, printTask);
  yield * takeEvery(types.FETCH_TODO_LIST, fetchTodoList);
}

export default mySaga;
