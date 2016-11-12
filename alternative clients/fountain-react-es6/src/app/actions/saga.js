import {takeEvery} from 'redux-saga';
import * as types from '../constants/ActionTypes';

// worker Saga
function * printTask(action) {
  console.log('printtask', action);
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
    Allows concurrent fetches of user.
  */
function * mySaga() {
  yield * takeEvery(types.ADD_TODO, printTask);
}

export default mySaga;
