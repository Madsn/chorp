import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import HomePage from './app/components/HomePage';
import Navbar from './app/components/Navbar';
import configureStore from './app/store/configureStore';
import {Router, Route, browserHistory} from 'react-router';

import '../node_modules/semantic-ui-css/semantic.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={HomePage}/>
      <Route path="/nav" component={Navbar}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
