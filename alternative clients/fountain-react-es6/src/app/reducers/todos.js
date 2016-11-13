import {
  ADD_TODO,
  TASKS_LOADING,
  TASKS_LOAD_SUCCESS,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    title: 'Use Redux',
    description: 'Use redux description',
    status: 0,
    assignee: null,
    dueDate: null
  }
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          status: 0,
          title: action.title
        },
        ...state
      ];

    case TASKS_LOADING:
      console.log('tasks loading triggered in reducer');
      return state; // TODO

    case TASKS_LOAD_SUCCESS:
      console.log('tasks load success', action);
      return action.tasks;

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      );

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, {text: action.text}) :
          todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, {status: 2}) :
          todo
      );

    case COMPLETE_ALL: {
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => Object.assign({}, todo, {
        completed: !areAllMarked
      }));
    }

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}
