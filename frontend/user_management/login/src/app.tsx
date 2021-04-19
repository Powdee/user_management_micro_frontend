import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import LoginRoute from './page';

ReactDOM.render(
  <Router>
    <Switch>
      <LoginRoute />
      <Redirect to="/login" from="/" />
    </Switch>
  </Router>
  , document.getElementById('root'),
);
