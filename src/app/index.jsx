import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTpEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.scss';

import App from './containers/app';
import ReactState from './components/react-state';
import ReactEvent from './components/react-event';
import ReactMobx from './components/react-mobx';
import ReactApos from './components/react-apos';

import TodoStore from './stores/todoStore';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

useStrict(true);
injectTpEventPlugin();

const stores = {
  todo: new TodoStore(),
};

// Inject store to all components
ReactDOM.render((
  <Provider {... stores}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/state" component={ReactState} />
        <Route path="/event" component={ReactEvent} />
        <Route path="/mobx" component={ReactMobx} />
        <Route path="/apos" component={ReactApos} />
        <Route path="/" component={ReactState} />
      </Route>
    </Router>
  </Provider>
),
BootstrapedElement);
