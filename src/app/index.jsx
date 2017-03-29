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
import Aposentadoria from './components/aposentadoria';

import AposentadoriaStore from './stores/aposentadoriaStore';

const ELEMENT_TO_BOOTSTRAP = 'root';
const BootstrapedElement = document.getElementById(ELEMENT_TO_BOOTSTRAP);

useStrict(true);
injectTpEventPlugin();

const stores = {
  aposentadoria: new AposentadoriaStore(),
};

// Inject store to all components
ReactDOM.render((
  <Provider {... stores}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Aposentadoria} />
      </Route>
    </Router>
  </Provider>
),
BootstrapedElement);
