import expect from 'expect';
import tasksPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('tasksPageReducer', () => {
  it('returns the initial state', () => {
    expect(tasksPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
