/// <reference path="../../../typings/index.d.ts" />

import { takeEvery, takeLatest } from 'redux-saga';

function *taskAdded() {
  console.log('Task added saga');
}

function *taskAddedSaga() {
  yield* takeEvery("ADD_TODO", taskAdded);
}
