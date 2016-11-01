import { createSelector } from 'reselect';

/**
 * Direct selector to the tasksPage state domain
 */
const selectTasksPageDomain = () => (state) => state.get('tasksPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TasksPage
 */

const selectTasksPage = () => createSelector(
  selectTasksPageDomain(),
  (substate) => substate.toJS()
);

export default selectTasksPage;
export {
  selectTasksPageDomain,
};
