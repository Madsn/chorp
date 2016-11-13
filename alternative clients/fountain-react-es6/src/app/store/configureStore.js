import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import {persistState} from 'redux-devtools';
import DevTools from '../containers/DevTools';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
  persistState(getDebugSessionKey())
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = rootReducer;
      store.replaceReducer(nextReducer);
    });
  }
  store.runSaga = sagaMiddleware.run;
  return store;
}

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}
