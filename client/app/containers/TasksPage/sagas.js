import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import {
  ADD_TASK_ACTION,
  ADD_TASK_SUCCEEDED,
  ADD_TASK_FAILED,
} from './constants';
import { addTask } from '../../api/Tasks';

function addTaskApiCall(args) {
  console.log('addTaskApiCall called');
}

export function* addTask(action) {
  try {
    const task = yield call(addTaskApiCall, action.payload);
    yield put({type: ADD_TASK_SUCCEEDED, task: task})
  } catch (e) {
    yield put({type: ADD_TASK_FAILED, message: e.message});
  }
}

function* addTaskSaga() {
  yield* takeEvery(ADD_TASK_ACTION, addTask);
}

// All sagas to be loaded
export default [
  addTaskSaga
];
